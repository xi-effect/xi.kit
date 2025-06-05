'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '@xipkg/utils';

interface ScrollAreaProps extends ScrollAreaPrimitive.ScrollAreaProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  scrollBarProps?: ScrollBarProps;
  scrollViewportProps?: ScrollAreaPrimitive.ScrollAreaViewportProps;
}

const ScrollArea = ({ className, children, ref, scrollBarProps, scrollViewportProps, ...props }: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root
      {...props}
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      <ScrollAreaPrimitive.Viewport {...scrollViewportProps} className="h-full w-full rounded-[inherit] [&>div]:!block">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar {...scrollBarProps} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

interface ScrollBarProps extends ScrollAreaPrimitive.ScrollAreaScrollbarProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const ScrollBar = ({ className, orientation = 'vertical', ref, ...props }: ScrollBarProps) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      {...props}
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className,
      )}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-gray-20" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

export { ScrollArea, ScrollBar };
