import * as react_jsx_runtime from 'react/jsx-runtime';

type EmojiPickerPropsT = {
    recentEmojis?: string[];
    onEmojiSelect: (emoji: string) => void;
};

declare const EmojiPicker: ({ recentEmojis, onEmojiSelect }: EmojiPickerPropsT) => react_jsx_runtime.JSX.Element;

export { EmojiPicker };
