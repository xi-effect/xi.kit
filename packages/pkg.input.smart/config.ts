import Prism from 'prismjs';

export enum MarkdownFormat {
  Bold = '**',
  Italic = '*',
  Strikethrough = '~~',
  Code = '`',
  Underline = '__',
}

export type MarkdownFormatValueT = (typeof MarkdownFormat)[keyof typeof MarkdownFormat];

export const prismMarkdown = {
  // Жирный текст
  bold: {
    pattern: /\*\*([^*]+)\*\*/g,
    alias: 'strong',
    inside: {
      text: {
        pattern: /[^*]+/, // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown,
      },
    },
  },

  // Курсив
  italic: {
    pattern: /\*([^*]+)\*/g,
    alias: 'em',
    inside: {
      text: {
        pattern: /[^*]+/, // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown,
      },
    },
  },

  // Подчёркнутый текст
  underline: {
    pattern: /__([^_]+)__/g,
    alias: 'u',
    inside: {
      text: {
        pattern: /[^_]+/, // Не оборачиваем сами нижние подчеркивания
        inside: Prism.languages.markdown,
      },
    },
  },

  // Перечёркнутый текст
  strikethrough: {
    pattern: /~~([^~]+)~~/g,
    alias: 's',
    inside: {
      text: {
        pattern: /[^~]+/, // Не оборачиваем сами тильды
        inside: Prism.languages.markdown,
      },
    },
  },
};
