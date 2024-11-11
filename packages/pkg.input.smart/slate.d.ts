import { BaseEditor, BaseRange } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { ReactNode } from 'react';

type CustomElement = { type: 'paragraph' | 'mention' | 'link'; url?: string; children: CustomText[] } | { type: 'link'; url: string; children: CustomText[] };
type CustomText = { text: string; bold?: boolean; italic?: boolean; strikethrough?: boolean, underline?: boolean; code?: boolean; link?: boolean; type?: 'link'; url?: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
