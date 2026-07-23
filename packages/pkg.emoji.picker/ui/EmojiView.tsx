'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';

import emojisData from '../emojis.json';
import { EmojiCategory } from './EmojiCategory';
import { CategoryT, EmojiT } from '../types';

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

type Props = {
  recentEmojis?: string[];
  onEmojiSelect: (emoji: string) => void;
};

export const EmojiView = ({ recentEmojis, onEmojiSelect }: Props) => {
  const categories = emojisData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

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

  const selectCategory = (index: number) => {
    setSearchQuery('');

    const container = scrollContainerRef.current;
    if (!container) return;

    const categoryEl = container.querySelector<HTMLElement>(`#emoji-category-${index}`);

    categoryEl?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActiveCategoryIndex(index);
  };

  const handleSearchEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveCategoryIndex(0);
    setSearchQuery(e.target.value);
  };

  const handleEmojiClick = useCallback(
    (char: string) => {
      onEmojiSelect(char);
    },
    [onEmojiSelect],
  );

  return (
    <div className="relative flex min-h-0 w-full">
      <div
        tabIndex={0}
        aria-label="Категории эмодзи"
        className="bg-background-subtle flex flex-col gap-2 rounded-bl-lg p-2"
      >
        <TooltipProvider>
          {emojiCategoriesIcons.map(({ icon: Icon, name }, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'h-6.5 w-6.5 rounded-sm border-transparent p-1',
                      index === activeCategoryIndex
                        ? 'bg-background-surface text-text-link focus:bg-background-surface'
                        : 'bg-status-info-background text-brand-60 focus:bg-status-info-background',
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
            );
          })}
        </TooltipProvider>
      </div>

      <div className="bg-background-surface absolute right-0 flex h-full min-h-0 flex-1 flex-col gap-2 rounded-r-lg p-2">
        <Input
          variant="s"
          before={<Search size="sm" className="text-icon-secondary" />}
          placeholder="Поиск"
          className="border"
          value={searchQuery}
          onChange={handleSearchEmoji}
        />

        <div ref={scrollContainerRef} className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
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
  );
};
