import React, { memo, useMemo, useRef } from 'react';
import { Button } from '@xipkg/button';
import { useVisibleRows, useIntersectionObserver } from './hooks';
import { BUFFER_ROWS, ROW_HEIGHT, ROW_SIZE, categoryIntersections } from './constants';
import { CategoryT } from './types';

type EmojiCategoryPropsT = {
  isIntersectionEnabled?: boolean;
  category: CategoryT;
  currentIndex: number;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
  handleEmojiClick: (emoji: string) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export const EmojiCategory = memo(
  ({
    currentIndex,
    isIntersectionEnabled = true,
    category,
    handleEmojiClick,
    containerRef,
    setActiveCategory,
  }: EmojiCategoryPropsT) => {
    const categoryRef = useRef<HTMLDivElement>(null);
    const totalRows = Math.ceil(category.emojis.length / ROW_SIZE);

    useIntersectionObserver({
      enabled: isIntersectionEnabled,
      externalRef: categoryRef,
      root: containerRef,
      threshold: 0.1,
      onChange: (entry) => {
        const index = Number(entry.target.id.replace('emoji-category-', ''));
        categoryIntersections[index] = entry.isIntersecting;

        const minIntersectingIndex = categoryIntersections.reduce(
          (lowestIndex, isIntersecting, index) => {
            return isIntersecting && index < lowestIndex ? index : lowestIndex;
          },
          Infinity,
        );
        setActiveCategory(minIntersectingIndex);
      },
    });

    const visibleRows = useVisibleRows(
      containerRef,
      categoryRef,
      totalRows,
      ROW_HEIGHT,
      BUFFER_ROWS,
    );

    const visibleEmojis = useMemo(() => {
      const [startRow, endRow] = visibleRows;
      const start = Math.max(0, startRow * ROW_SIZE);
      const end = Math.min(category.emojis.length, endRow * ROW_SIZE);
      return category.emojis.slice(start, end);
    }, [visibleRows, category.emojis]);

    return (
      <div id={`emoji-category-${currentIndex}`} ref={categoryRef} className="mb-4">
        {category.name_rus && (
          <div className="bg-gray-0 pb-2 dark:bg-gray-100">
            <h6 className="text-s-base text-gray-80 dark:text-gray-0 first-letter:uppercase">
              {category.name_rus}
            </h6>
          </div>
        )}
        <div
          style={{
            height: `${totalRows * ROW_HEIGHT}px`,
            position: 'relative',
          }}
        >
          <div
            className="grid grid-cols-8 gap-1"
            style={{
              transform: `translateY(${visibleRows[0] * ROW_HEIGHT}px)`,
            }}
          >
            {visibleEmojis.map((emoji) => (
              <Button
                key={emoji.name + emoji.unicode}
                title={`:${emoji.name}:`}
                variant="ghost"
                className="hover:bg-gray-10 dark:hover:bg-gray-90 h-6 w-6 rounded-sm p-1"
                onClick={() => handleEmojiClick(emoji.unicode)}
                style={{
                  fontFamily: 'Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji',
                }}
              >
                {emoji.char}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

EmojiCategory.displayName = 'EmojiCategory';
