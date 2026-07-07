type TCalculateColCount = {
  width: number;
  maxColumns: number;
  gap: number;
  itemWidth: number;
};

export const calculateColCount = ({
  width,
  maxColumns,
  gap,
  itemWidth,
}: TCalculateColCount): number => {
  return Math.min(maxColumns, Math.max(1, Math.floor((width + gap) / (itemWidth + gap))));
};
