import { ReactNode } from 'react';
import { BaseRange, BaseText } from 'slate';
import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from "slate-history";

// Типизация Инпута в чатах pkg.editor
export type CustomEditorSI = BaseEditor &
  ReactEditor & {
    resetContent: () => void;
    setContent: (nodes: Descendant[]) => void;
    focus: () => void;
  };

type CustomElementSI =
  | { type: 'paragraph' | 'mention' | 'link'; url?: string; children: CustomText[] }
  | { type: 'link'; url: string; children: CustomText[] };

export type CustomTextSI = BaseText & {
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  link?: boolean;
  type?: 'link';
  url?: string;
};

// Типизация Редактора pkg.editor
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor & { id: string; type: string };

export type CustomElement = {
  children: Array<CustomText | CustomElement>;
  id: string;
  type: CustomElementType;
  url?: string;
  fileName?: string;
  size?: number;
  icon?: ReactNode;
  language?: string;
};

export type ParagraphElement = {
  id: string;
  type: 'paragraph';
  children: CustomText[];
};

export type HeadingElement = {
  id: string;
  type: 'heading1' | 'heading2' | 'heading3' | 'mainTitle';
  children: CustomText[];
};

export type ListElement = {
  id: string;
  type: 'bulleted-list' | 'numbered-list';
  children: CustomText[];
};

export type ListItemElement = {
  id: string;
  type: 'list-item';
  children: (CustomElement | CustomText)[];
};

export type QuoteElement = {
  id: string;
  type: 'quote' | 'quoteText' | 'quoteAuthor';
  children: (CustomElement | CustomText)[];
};

export type MediaElement = {
  id: string;
  type: 'imageBlock' | 'videoBlock' | 'fileBlock';
  url: string;
  fileName?: string;
  size?: number;
  children: CustomText[];
};

export type LinkElement = {
  id: string;
  type: 'link';
  url: string;
  children: CustomText[];
};

export type IconElement = {
  id: string;
  type: 'icon';
  icon: ReactNode;
};

export type DividerElement = {
  id: string;
  type: 'divider';
  children: CustomText[];
};

export type CodeElement = {
  id: string;
  type: 'code';
  language?: string;
  children: CustomText[];
};

export type TipElement = {
  id: string;
  type: 'tip';
  children: (CustomElement | CustomText | IconElement)[];
};

export type ImageElement = {
  id: string;
  type: 'image';
  children: CustomText[];
};

export type FileElement = {
  id: string;
  type: 'file';
  url: string;
  fileName?: string;
  size?: number;
  children: CustomText[];
};

export type VideoElement = {
  id: string;
  type: 'video';
  children: CustomText[];
};

export type CommonCustomElementType =
  | ParagraphElement
  | HeadingElement
  | ListElement
  | ListItemElement
  | QuoteElement
  | MediaElement
  | LinkElement
  | IconElement
  | DividerElement
  | CodeElement
  | TipElement
  | ImageElement
  | FileElement
  | VideoElement;
type CustomElementType = CommonCustomElementType['type'];

export type CustomText = {
  id?: string;
  type?: string;
  text: string;
  bold?: true;
  italic?: true;
  underlined?: true;
  stroke?: true;
  color?: string;
  bg?: string;
  token?: string;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor | CustomEditorSI;
    Element: CustomElement | CustomElementSI;
    Text: CustomText | CustomTextSI;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }
}

export {};
