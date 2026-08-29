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
  emojiBaseUrl,
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
    <div className={cn('bg-background-surface min-w-[380px] rounded-lg', className)}>
      <SwitcherAnimate
        tabs={switcherTabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as PickerTabT)}
        className="bg-background-subtle flex w-full rounded-t-lg rounded-b-none p-1.5"
        tabClassName="text-m-base h-7 flex-1 font-medium data-[state=inactive]:text-text-primary data-[state=inactive]:hover:text-text-secondary data-[state=active]:text-action-primary-text data-[state=active]:hover:text-gray-10"
        indicatorClassName="rounded-md"
      />

      {activeTab === 'emojis' ? (
        <EmojiView
          recentEmojis={recentEmojis}
          onEmojiSelect={onEmojiSelect}
          emojiBaseUrl={emojiBaseUrl}
        />
      ) : (
        <StickerView stickers={stickers} onStickerClick={handleStickerClick} />
      )}
    </div>
  );
};
