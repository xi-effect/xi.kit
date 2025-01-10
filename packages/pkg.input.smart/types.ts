import { BaseEditor, BaseText, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomEditorT = BaseEditor &
  ReactEditor & {
    resetContent: () => void;
    setContent: (nodes: Descendant[]) => void;
    focus: () => void;
  };

export type CustomElementT =
  | { type: 'paragraph' | 'mention' | 'link'; url?: string; children: CustomTextT[] }
  | { type: 'link'; url: string; children: CustomTextT[] };

export type CustomTextT = BaseText & {
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
