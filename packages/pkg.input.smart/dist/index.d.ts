import React, { ComponentProps } from 'react';
import { Editable, Slate } from 'slate-react';
import { Editor, Descendant } from 'slate';

type SmartInputPropsT = {
    editorRef?: React.RefObject<Editor | null>;
    initialValue?: Descendant[];
    onChange?: (value: Descendant[]) => void;
    editableClassName?: string;
    editableProps?: ComponentProps<typeof Editable>;
    slateProps?: ComponentProps<typeof Slate>;
};
declare const SmartInput: ({ editorRef, initialValue, onChange, editableClassName, editableProps, slateProps, }: SmartInputPropsT) => React.JSX.Element;

type MarkdownPreviewProps = {
    markdown: string;
};
declare const MarkdownPreview: ({ markdown }: MarkdownPreviewProps) => React.JSX.Element;

type CustomElement$1 = {
    type: 'paragraph';
    children: CustomText$1[];
} | {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: CustomText$1[];
} | {
    type: 'codeBlock';
    language?: string;
    children: CustomText$1[];
};
type CustomText$1 = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
};
declare const slateToMarkdown: (value: CustomElement$1[], withLinebreak?: boolean) => string;

type CustomElement = {
    type: 'paragraph';
    children: CustomText[];
} | {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: CustomText[];
} | {
    type: 'codeBlock';
    language?: string;
    children: CustomText[];
};
type CustomText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    beforeUnderline?: boolean;
    afterUnderline?: boolean;
};
declare const markdownToSlate: (markdown: string) => CustomElement[];

export { MarkdownPreview, SmartInput, type SmartInputPropsT, markdownToSlate, slateToMarkdown };
