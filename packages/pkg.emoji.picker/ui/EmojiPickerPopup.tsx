'use client';

import { useCallback, useState } from 'react';
import { cn } from '@xipkg/utils';
import { SwitcherAnimate } from '@xipkg/switcher-animate';

import { EmojiView } from './EmojiView';
import { StickerView } from './StickerView';
import { StickerT, TEmojiPickerPropsT } from '../types';

type TEmojiPopupT = TEmojiPickerPropsT & {
  className?: string;
};

type PickerTabT = 'emojis' | 'stickers';

const switcherTabs = [
  { id: 'emojis', label: 'Эмодзи' },
  { id: 'stickers', label: 'Стикеры' },
];

export const EmojiPickerPopup = ({
  recentEmojis,
  stickers = [],
  onEmojiSelect,
  onStickerSelect,
  className,
}: TEmojiPopupT) => {
  const [activeTab, setActiveTab] = useState<PickerTabT>('emojis');

  const handleStickerClick = useCallback(
    (sticker: StickerT) => {
      onStickerSelect?.(sticker);
    },
    [onStickerSelect],
  );

  return (
    <div className={cn('bg-gray-0 w-69 rounded-lg', className)}>
      <SwitcherAnimate
        tabs={switcherTabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as PickerTabT)}
        className="bg-gray-5 flex w-full gap-2 rounded-t-lg rounded-b-none p-1.5"
        tabClassName="text-m-base h-7 flex-1 font-medium data-[state=inactive]:text-gray-100 data-[state=inactive]:hover:text-gray-90 data-[state=active]:text-gray-0 data-[state=active]:hover:text-gray-10"
        indicatorClassName="rounded-md"
      />

      {activeTab === 'emojis' ? (
        <EmojiView recentEmojis={recentEmojis} onEmojiSelect={onEmojiSelect} />
      ) : (
        <StickerView stickers={stickers} onStickerClick={handleStickerClick} />
      )}
    </div>
  );
};
