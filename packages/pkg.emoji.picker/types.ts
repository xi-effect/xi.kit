export type EmojiT = {
  unicode: string;
  char: string;
  name: string;
};

export type StickerT = {
  id: string;
  name: string;
  src: string;
};

export type CategoryT = {
  name: string;
  nameRus?: string;
  emojis: EmojiT[];
};

export type FormattedEmojiDataT = {
  category?: CategoryT;
  emojis: EmojiT[];
};

export type TEmojiPickerPropsT = {
  recentEmojis?: string[];
  stickers?: StickerT[];
  onEmojiSelect: (emoji: string) => void;
  onStickerSelect?: (sticker: StickerT) => void;
};
