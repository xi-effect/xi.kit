'use client';

import { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { Button } from '@xipkg/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@xipkg/dropdown';
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
import { CategoryT, EmojiPickerPropsT, EmojiT } from './types';
import { EmojiCategory } from './EmojiCategory';

import { unicodeToNative } from './utils/unicodeToNative';

import emojisData from './emojis.json';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';

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

export const EmojiPicker = ({ recentEmojis, onEmojiSelect }: EmojiPickerPropsT) => {
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

    return categories.flatMap((category) =>
      category.emojis.filter((emoji) => recentEmojis.includes(emoji.unicode)),
    );
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
    (emoji: string) => {
      const char = unicodeToNative(emoji);
      onEmojiSelect(char);
    },
    [onEmojiSelect],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="bg-gray-0 dark:bg-gray-100 h-auto rounded-[4px] p-1">
          <Emotions className="text-gray-80 dark:text-gray-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0" align="end" sideOffset={8}>
        <div className="flex h-[296px] w-[276px] rounded-lg">
          <div className="bg-gray-5 dark:bg-gray-90 flex flex-col gap-2 p-2">
            <TooltipProvider>
              {emojiCategoriesIcons.map(({ icon: Icon, name }, index) => {
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          'hover:bg-brand-0 group h-auto rounded-none bg-transparent p-1',
                          index === activeCategoryIndex
                            ? 'bg-brand-0 text-brand-100 focus:bg-brand-0'
                            : 'text-brand-50 dark:text-brand-40',
                        )}
                        onClick={() => selectCategory(index)}
                      >
                        <Icon
                          size="s"
                          className="fill-current group-hover:fill-current group-focus:fill-current"
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="z-[99]">
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>
          <div className="bg-gray-0 dark:bg-gray-100 flex w-full flex-col gap-2 p-2">
            <Input
              variant="s"
              before={<Search size="s" className="text-gray-60 dark:text-gray-40" />}
              placeholder="Поиск"
              className="border"
              value={searchQuery}
              onChange={handleSearchEmoji}
            />
            <div
              className="h-full overflow-y-auto"
              ref={scrollContainerRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredCategories && searchQuery ? (
                <EmojiCategory
                  setActiveCategory={setActiveCategoryIndex}
                  category={filteredCategories}
                  currentIndex={0}
                  handleEmojiClick={handleEmojiClick}
                  containerRef={scrollContainerRef}
                  isIntersectionEnabled={false}
                />
              ) : (
                emojiCategories.length > 0 &&
                emojiCategories.map((emojis, index) => (
                  <EmojiCategory
                    key={index}
                    setActiveCategory={setActiveCategoryIndex}
                    category={emojis}
                    currentIndex={index}
                    handleEmojiClick={handleEmojiClick}
                    containerRef={scrollContainerRef}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
