import { BaseEditor, BaseText, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor &
  ReactEditor & {
    resetContent: () => void;
    setContent: (nodes: Descendant[]) => void;
    focus: () => void;
  };

export type CustomElement =
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
};
