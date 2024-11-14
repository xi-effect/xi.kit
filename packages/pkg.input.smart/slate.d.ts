import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

type CustomElement =
  | { type: 'paragraph' | 'mention' | 'link'; url?: string; children: CustomText[] }
  | { type: 'link'; url: string; children: CustomText[] };

export type CustomText = BaseText & {
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  link?: boolean;
  type?: 'link';
  url?: string;
  bold?: boolean;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
