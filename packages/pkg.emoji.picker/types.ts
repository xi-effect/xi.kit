export type EmojiT = {
  unicode: string;
  char: string;
  name: string;
};

export type CategoryT = {
  name: string;
  name_rus?: string;
  emojis: EmojiT[];
};

export type FormattedEmojiDataT = {
  category?: CategoryT;
  emojis: EmojiT[];
};

export type EmojiPickerPropsT = {
  recentEmojis?: string[];
  onEmojiSelect: (emoji: string) => void;
};
