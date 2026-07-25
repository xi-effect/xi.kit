import { Button } from '@xipkg/button';
import { StickerT } from '../types';

type Props = {
  stickers: StickerT[];
  onStickerClick: (sticker: StickerT) => void;
};

export const StickerView = ({ stickers, onStickerClick }: Props) => {
  return (
    <div className="h-78.5 overflow-y-auto p-2">
      <div className="grid grid-cols-3 gap-2">
        {stickers?.map((sticker) => (
          <Button
            key={sticker.id}
            variant="ghost"
            onClick={() => onStickerClick(sticker)}
            className="hover:bg-gray-5 flex aspect-square size-full items-center justify-center rounded p-1 transition-colors"
          >
            <img
              src={sticker.src}
              alt={sticker.name}
              className="max-h-full max-w-full object-contain"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};
