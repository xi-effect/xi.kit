'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '@xipkg/utils';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps & {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

const ScrollArea = ({ className, children, ref, ...props }: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root
      {...props}
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

type ScrollBarProps = ScrollAreaPrimitive.ScrollAreaScrollbarProps & {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

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
      <ScrollAreaPrimitive.ScrollAreaThumb className="bg-gray-20 relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

export { ScrollArea, ScrollBar };
