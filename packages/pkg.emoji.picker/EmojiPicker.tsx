import { Button } from '@xipkg/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@xipkg/dropdown';
import { Emotions } from '@xipkg/icons';

import { EmojiPickerPopup } from './ui';
import { TEmojiPickerPropsT } from './types';

export const EmojiPicker = ({
  recentEmojis,
  onEmojiSelect,
  stickers,
  onStickerSelect,
}: TEmojiPickerPropsT) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-background-subtle focus:bg-background-subtle h-auto rounded-sm border-transparent bg-transparent p-1 hover:border-transparent focus:border-transparent"
        >
          <Emotions className="text-icon-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0" align="end" sideOffset={8}>
        <EmojiPickerPopup
          recentEmojis={recentEmojis}
          onEmojiSelect={onEmojiSelect}
          stickers={stickers}
          onStickerSelect={onStickerSelect}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
