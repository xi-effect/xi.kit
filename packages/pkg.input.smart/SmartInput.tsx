import React, { useMemo, useCallback, ComponentProps } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Descendant, Text, Range, BaseRange } from 'slate';
import { withHistory } from 'slate-history';
import { InlineToolbar, Leaf } from './components';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

export type SmartInputPropsT = {
  initialValue?: Descendant[];
  onChange?: (value: Descendant[]) => void;
  editableProps?: ComponentProps<typeof Editable>;
  slateProps?: ComponentProps<typeof Slate>;
};

type CustomRange = BaseRange & {
  italic?: boolean;
  bold?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  underline?: boolean; // Добавляем поддержку underline
};

const getLength = (token: any) => {
  if (typeof token === 'string') {
    return token.length; // Если токен — строка, возвращаем его длину
  } else if (typeof token.content === 'string') {
    return token.content.length; // Если содержимое токена — строка, возвращаем его длину
  } else if (Array.isArray(token.content)) {
    // Если содержимое токена — массив, суммируем длины всех его элементов
    return token.content.reduce((length: number, t: any) => length + getLength(t), 0);
  }
  return 0; // Если токен не является строкой или массивом, возвращаем 0
};


Prism.languages.markdown = {
  // Жирный текст
  'bold': {
    pattern: /\*\*([^*]+)\*\*/g,
    alias: 'strong',
    inside: {
      'text': {
        pattern: /[^*]+/, // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown
      }
    }
  },

  // Курсив
  'italic': {
    pattern: /\*([^*]+)\*/g,
    alias: 'em',
    inside: {
      'text': {
        pattern: /[^*]+/, // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown
      }
    }
  },

  // Подчёркнутый текст
  'underline': {
    pattern: /__([^_]+)__/g,
    alias: 'u',
    inside: {
      'text': {
        pattern: /[^_]+/, // Не оборачиваем сами нижние подчеркивания
        inside: Prism.languages.markdown
      }
    }
  },

  // Перечёркнутый текст
  'strikethrough': {
    pattern: /~~([^~]+)~~/g,
    alias: 's',
    inside: {
      'text': {
        pattern: /[^~]+/, // Не оборачиваем сами тильды
        inside: Prism.languages.markdown
      }
    }
  }
};

export const SmartInput = ({ initialValue, onChange, editableProps, slateProps }: SmartInputPropsT) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const decorate = useCallback(([node, path]: any) => {
    const ranges: CustomRange[] = [];

    if (!Text.isText(node)) {
      return ranges;
    }

    const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
    let start = 0;

    for (const token of tokens) {
      const length = typeof token === 'string' ? token.length : getLength(token);
      const end = start + length;

      // Проверяем, является ли токен строкой или объектом с типом
      if (typeof token === 'string') {
        start = end; // Пропускаем обычный текст
        continue;
      }

      // Обрабатываем форматирование, избегая применения стилей к символам форматирования
      if (token.type) {
        const { type } = token;
        const tokenLength = token.content ? getLength(token.content) : length;

        // Добавляем диапазон для форматированного текста, исключая символы форматирования
        if (type === 'bold') {
          ranges.push({
            bold: true,
            anchor: { path, offset: start + 2 }, // Пропускаем 2 символа для '**'
            focus: { path, offset: end - 2 } // Пропускаем 2 символа для '**'
          });
        } else if (type === 'italic') {
          ranges.push({
            italic: true,
            anchor: { path, offset: start + 1 }, // Пропускаем 1 символ для '*'
            focus: { path, offset: end - 1 } // Пропускаем 1 символ для '*'
          });
        } else if (type === 'underline') {
          ranges.push({
            underline: true,
            anchor: { path, offset: start + 2 }, // Пропускаем 2 символа для '__'
            focus: { path, offset: end - 2 } // Пропускаем 2 символа для '__'
          });
        } else if (type === 'strikethrough') {
          ranges.push({
            strikethrough: true,
            anchor: { path, offset: start + 2 }, // Пропускаем 2 символа для '~~'
            focus: { path, offset: end - 2 } // Пропускаем 2 символа для '~~'
          });
        } else if (type === 'code') {
          ranges.push({
            code: true,
            anchor: { path, offset: start + 1 }, // Пропускаем 1 символ для '`'
            focus: { path, offset: end - 1 } // Пропускаем 1 символ для '`'
          });
        }
      }

      start = end; // Обновляем начальную позицию
    }

    return ranges;
  }, []);

  const handleChange = (value: Descendant[]) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <Slate editor={editor} initialValue={initialValue ?? []} onChange={handleChange} {...slateProps}>
      <InlineToolbar />
      <Editable
        decorate={decorate}
        className="flex flex-col gap-2 p-2 text-gray-100 focus-visible:outline-none focus-visible:[&_*]:outline-none"
        renderLeaf={(props) => <Leaf {...props} />}
        {...editableProps}
      />
    </Slate>
  );
};
