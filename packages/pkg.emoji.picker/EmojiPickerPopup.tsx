'use client';

import { useState, useRef, useMemo, useCallback } from 'react';
import { Button } from '@xipkg/button';
import {
  Clock,
  Emotions,
  Search,
  Nature,
  Food,
  Activity,
  Places,
  Objects,
  Heart,
  Flag,
} from '@xipkg/icons';
import { Input } from '@xipkg/input';
import { cn } from '@xipkg/utils';
import { CategoryT, TEmojiPickerPropsT, EmojiT, StickerT } from './types';
import { EmojiCategory } from './EmojiCategory';
import emojisData from './emojis.json';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';
import { Tabs } from '@xipkg/tabs';

type TEmojiPopupT = TEmojiPickerPropsT & {
  className?: string;
};

const recentIcon = { icon: Clock, name: 'Последние' };

const categoryIcons = [
  { icon: Emotions, name: 'Лица и эмоции' },
  { icon: Nature, name: 'Природа' },
  { icon: Food, name: 'Еда и напитки' },
  { icon: Activity, name: 'Активности' },
  { icon: Places, name: 'Путешествия и места' },
  { icon: Objects, name: 'Объекты' },
  { icon: Heart, name: 'Символы' },
  { icon: Flag, name: 'Флаги' },
];

export const EmojiPickerPopup = ({
  recentEmojis,
  onEmojiSelect,
  stickers,
  onStickerSelect,
}: TEmojiPopupT) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = emojisData;

  const handleSearchEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveCategoryIndex(0);
    setSearchQuery(e.target.value);
  };

  const filteredCategories = useMemo(() => {
    if (!categories) return { name: 'empty', emojis: [] };

    return {
      name: 'search',
      emojis: categories
        .map((category) => category.emojis)
        .flat()
        .filter((emoji: EmojiT) => emoji.name.toLowerCase().includes(searchQuery.toLowerCase())),
    };
  }, [categories, searchQuery]);

  const matchedEmojis = useMemo(() => {
    if (!categories || !recentEmojis) return [];

    const emojis = categories.reduce<EmojiT[]>((acc, category) => {
      acc.push(...category.emojis);

      return acc;
    }, []);
    const emojisMap = new Map(emojis.map((emoji) => [emoji.char, emoji]));

    const uniqRecentEmojis = [...new Set(recentEmojis)];

    return uniqRecentEmojis.reduce<EmojiT[]>((acc, recentEmoji) => {
      const emoji = emojisMap.get(recentEmoji);
      if (!emoji) return acc;

      acc.push(emoji);

      return acc;
    }, []);
  }, [categories, recentEmojis]);

  const emojiCategoriesIcons =
    matchedEmojis.length > 0 ? [recentIcon, ...categoryIcons] : categoryIcons;

  const emojiCategories: CategoryT[] = useMemo(() => {
    if (!categories) {
      return [];
    }
    return matchedEmojis.length > 0
      ? [{ emojis: matchedEmojis, name: 'recent' }, ...categories]
      : categories;
  }, [categories, matchedEmojis]);

  const scrollToCategory = (target: HTMLElement) => {
    target.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  };

  const selectCategory = (index: number) => {
    setSearchQuery('');
    setTimeout(() => {
      setActiveCategoryIndex(index);
    }, 50);

    const container = scrollContainerRef.current;
    if (!container) return;

    const categoryEl = container.querySelector<HTMLElement>(`#emoji-category-${index}`);
    if (categoryEl) {
      scrollToCategory(categoryEl);
    }
  };

  const handleEmojiClick = useCallback(
    (char: string) => {
      onEmojiSelect(char);
    },
    [onEmojiSelect],
  );

  const handleStickerClick = useCallback(
    (sticker: StickerT) => {
      onStickerSelect?.(sticker);
    },
    [onStickerSelect],
  );

  return (
    <div className="bg-gray-0 h-auto w-69 rounded-lg">
      <Tabs.Root defaultValue="emoji" className="flex h-full max-h-91 min-h-0 w-full flex-col">
        <Tabs.List className="py-1.5">
          <Tabs.Trigger value="emoji">Эмодзи</Tabs.Trigger>
          <Tabs.Trigger value="stickers">Стикеры</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="stickers" className="overflow-y-auto">
          <div className="h-full overflow-y-auto p-2">
            <div className="grid grid-cols-3 gap-2">
              {stickers?.map((sticker) => (
                <Button
                  key={sticker.id}
                  variant="ghost"
                  onClick={() => handleStickerClick(sticker)}
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
        </Tabs.Content>

        <Tabs.Content value="emoji" className="flex min-h-0 flex-1">
          <div className="relative flex min-h-0 w-full">
            <div
              tabIndex={0}
              aria-label="Категории эмодзи"
              className="bg-gray-5 flex flex-col gap-2 rounded-bl-lg p-2"
            >
              <TooltipProvider>
                {emojiCategoriesIcons.map(({ icon: Icon, name }, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          'h-auto rounded-sm border-transparent p-1',
                          index === activeCategoryIndex
                            ? 'bg-brand-0 text-brand-100'
                            : 'text-brand-60',
                        )}
                        onClick={() => selectCategory(index)}
                      >
                        <Icon size="sm" />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent side="left">
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            <div className="bg-gray-0 absolute right-0 flex h-full min-h-0 flex-1 flex-col gap-2 rounded-r-lg p-2">
              <Input
                variant="s"
                before={<Search size="sm" className="text-gray-60" />}
                placeholder="Поиск"
                className="border"
                value={searchQuery}
                onChange={handleSearchEmoji}
              />

              <div
                ref={scrollContainerRef}
                className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto"
              >
                {searchQuery ? (
                  <EmojiCategory
                    setActiveCategory={setActiveCategoryIndex}
                    category={filteredCategories}
                    currentIndex={0}
                    handleEmojiClick={handleEmojiClick}
                    containerRef={scrollContainerRef}
                    isIntersectionEnabled={false}
                  />
                ) : (
                  emojiCategories.map((category, index) => (
                    <EmojiCategory
                      key={index}
                      setActiveCategory={setActiveCategoryIndex}
                      category={category}
                      currentIndex={index}
                      handleEmojiClick={handleEmojiClick}
                      containerRef={scrollContainerRef}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
