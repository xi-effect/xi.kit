import { useEffect, useState } from 'react';

const getOffsetWithinContainer = (container: HTMLElement, element: HTMLElement) => {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return elementRect.top - containerRect.top + container.scrollTop;
};

export const useVisibleRows = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  categoryRef: React.RefObject<HTMLDivElement | null>,
  totalRows: number,
  rowHeight: number,
  bufferRows: number,
) => {
  const [visibleRows, setVisibleRows] = useState<[number, number]>([
    0,
    Math.min(totalRows, bufferRows + 4),
  ]);

  useEffect(() => {
    const updateVisibleRows = () => {
      if (!containerRef.current || !categoryRef.current) return;

      const container = containerRef.current;
      const category = categoryRef.current;
      const offsetTop = getOffsetWithinContainer(container, category);
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

      if (visibleEnd <= visibleStart) {
        setVisibleRows([0, Math.min(totalRows, bufferRows + 4)]);
        return;
      }

      setVisibleRows([visibleStart, visibleEnd]);
    };

    updateVisibleRows();

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateVisibleRows, { passive: true });

    const resizeObserver = new ResizeObserver(updateVisibleRows);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', updateVisibleRows);
      resizeObserver.disconnect();
    };
  }, [containerRef, totalRows, categoryRef, rowHeight, bufferRows]);

  return visibleRows;
};
