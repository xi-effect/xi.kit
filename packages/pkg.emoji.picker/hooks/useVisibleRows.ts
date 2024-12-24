import { useEffect, useState } from 'react';

export const useVisibleRows = (
  containerRef: React.RefObject<HTMLDivElement>,
  categoryRef: React.RefObject<HTMLDivElement>,
  totalRows: number,
  rowHeight: number,
  bufferRows: number,
) => {
  const [visibleRows, setVisibleRows] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const updateVisibleRows = () => {
      if (!containerRef.current || !categoryRef.current) return;

      const container = containerRef.current;
      const offsetTop = categoryRef.current.offsetTop;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      const visibleStart = Math.max(
        0,
        Math.floor((scrollTop - offsetTop) / rowHeight) - bufferRows,
      );
      const visibleEnd = Math.min(
        totalRows,
        Math.ceil((scrollTop - offsetTop + containerHeight) / rowHeight) + bufferRows,
      );

      setVisibleRows([visibleStart, visibleEnd]);
    };

    updateVisibleRows();

    const container = containerRef?.current;
    if (container) {
      container.addEventListener('scroll', updateVisibleRows);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateVisibleRows);
      }
    };
  }, [containerRef, totalRows, categoryRef, rowHeight, bufferRows]);

  return visibleRows;
};
