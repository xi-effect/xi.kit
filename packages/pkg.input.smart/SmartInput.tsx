import React, { useMemo, useCallback, ComponentProps, useEffect, useRef } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Descendant, Text, Range, BaseRange, Transforms, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { InlineToolbar, Leaf } from './components';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import { cn } from '@xipkg/utils';
import { getLength, markdownToSlate, slateToMarkdown } from './utils';
import { prismMarkdown } from './config';

Prism.languages.markdown = prismMarkdown;

export type SmartInputPropsT = {
  initialValue?: Descendant[];
  onChange?: (value: Descendant[]) => void;
  editableClassName?: string;
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

export const SmartInput = ({ initialValue, onChange, editableClassName, editableProps, slateProps }: SmartInputPropsT) => {
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

  const handleCopy = useCallback((event: ClipboardEvent) => {
    const { selection } = editor;

    if (!event || !event.clipboardData) return;

    if (selection) {
      // Получаем выделенный текст и форматируем в Markdown
      const value = Editor.fragment(editor, selection);
      console.log('value', value);

      const markdownText = slateToMarkdown(value as any);

      // Копируем markdownText в буфер обмена
      event.clipboardData.setData('text/plain', markdownText);
      event.preventDefault();
    }
  }, [editor]);

  const handlePaste = useCallback((event: ClipboardEvent) => {
    if (!event || !event.clipboardData || !editor.selection) return;

    const pastedText = event.clipboardData.getData('text/plain');

    Transforms.insertText(editor, pastedText, { at: editor.selection });

    event.preventDefault();
  }, [editor]);

  useEffect(() => {
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
    };
  }, [handleCopy, handlePaste]);

  const editableRef = useRef(null);

  return (
    <Slate editor={editor} initialValue={initialValue ?? []} onChange={handleChange} {...slateProps}>
      <InlineToolbar editableRef={editableRef} />
      <Editable
        ref={editableRef}
        decorate={decorate}
        className={cn("text-gray-100 focus-visible:outline-none focus-visible:[&_*]:outline-none", editableClassName)}
        renderLeaf={(props) => <Leaf {...props} />}
        {...editableProps}
      />
    </Slate>
  );
};
