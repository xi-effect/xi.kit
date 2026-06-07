import { Button } from '@xipkg/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@xipkg/dropdown';
import { Emotions } from '@xipkg/icons';
import { EmojiPickerPopup } from './EmojiPickerPopup';
import { TEmojiPickerProps } from './types';

export const EmojiPicker = ({ recentEmojis, onEmojiSelect }: TEmojiPickerProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto rounded-[4px] border-transparent bg-transparent p-1 hover:border-transparent hover:bg-gray-5 focus:border-transparent focus:bg-gray-5"
        >
          <Emotions className="text-gray-80" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0" align="end" sideOffset={8}>
        <EmojiPickerPopup recentEmojis={recentEmojis} onEmojiSelect={onEmojiSelect} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
