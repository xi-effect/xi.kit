import { Button } from '@xipkg/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@xipkg/dropdown';
import { Emotions } from '@xipkg/icons';
import { EmojiPickerPopup } from './EmojiPickerPopup';
import { TEmojiPickerProps } from './types';

export const EmojiPicker = ({ recentEmojis, onEmojiSelect }: TEmojiPickerProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="bg-gray-0 h-auto rounded-sm p-1 dark:bg-gray-100">
          <Emotions className="text-gray-80 dark:text-gray-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0" align="end" sideOffset={8}>
        <EmojiPickerPopup recentEmojis={recentEmojis} onEmojiSelect={onEmojiSelect} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
