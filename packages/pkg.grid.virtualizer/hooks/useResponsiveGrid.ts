import { useEffect, useState, RefObject } from 'react';
import { calculateColCount } from '../utils';

export const useResponsiveGrid = (
  parentRef: RefObject<HTMLDivElement | null>,
  itemWidth: number,
  gap: number,
  maxColumns: number,
) => {
  const [colCount, setColCount] = useState(1);

  // Вычисляем количество колонок
  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      const cols = calculateColCount({ width, maxColumns, gap, itemWidth });
      setColCount(cols);
    });
    ro.observe(el);

    setColCount(calculateColCount({ width: el.clientWidth, maxColumns, gap, itemWidth }));

    return () => ro.disconnect();
  }, [parentRef, itemWidth, maxColumns, gap]);

  return { colCount };
};
