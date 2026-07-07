import { RefObject, useCallback, useLayoutEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useResponsiveGrid } from './hooks';

type TItem = {
  id: number;
};

export type TGridVirtualizer<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  parentRef: RefObject<HTMLDivElement | null>;
  defaultRowHeight?: number;
  minItemWidth?: number;
  gap?: number;
  maxColumns?: number;
  isSingleColumn?: boolean;
  overscan?: number;
};

export const GridVirtualizer = <T extends TItem>({
  items,
  renderItem,
  className,
  parentRef,
  defaultRowHeight = 100,
  minItemWidth = 0,
  gap = 0,
  maxColumns = 1,
  isSingleColumn = false,
  overscan = 5,
  ...props
}: TGridVirtualizer<T>) => {
  const { colCount: responsiveColCount } = useResponsiveGrid(
    parentRef,
    minItemWidth,
    gap,
    maxColumns,
  );
  const colCount = isSingleColumn ? 1 : responsiveColCount;

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(items.length / colCount),
    getScrollElement: () => parentRef.current,
    estimateSize: () => defaultRowHeight + gap,
    overscan,
  });

  const measureRow = useCallback(
    (element: HTMLDivElement | null) => {
      if (element) {
        rowVirtualizer.measureElement(element);
      }
    },
    [rowVirtualizer],
  );

  useLayoutEffect(() => {
    rowVirtualizer.measure();
  }, [items.length, colCount, rowVirtualizer]);

  return (
    <div
      className={className}
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
      {...props}
    >
      {rowVirtualizer.getVirtualItems().map((virtualItem) => {
        const startIndex = virtualItem.index * colCount;
        const endIndex = Math.min(startIndex + colCount, items.length);
        const rowItems = items.slice(startIndex, endIndex);

        return (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={measureRow}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              display: 'grid',
              gap,
              paddingBottom: gap,
              gridTemplateColumns: `repeat(${colCount}, minmax(${minItemWidth}px, 1fr)`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {rowItems.map((item) => (
              <div key={item.id}>{renderItem(item)}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
