export enum MarkdownFormat {
  Bold = '**',
  Italic = '*',
  Strikethrough = '~~',
  Code = '`',
  Underline = '__'
};

export type MarkdownFormatValueT = (typeof MarkdownFormat)[keyof typeof MarkdownFormat];
