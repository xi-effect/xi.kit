import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@xipkg/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

interface TooltipArrowProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> {
  ref?: React.Ref<React.ElementRef<typeof TooltipPrimitive.Arrow>>;
}

const TooltipArrow = ({ className, width = 15, height = 6, ref, ...props }: TooltipArrowProps) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    width={width}
    height={height}
    asChild={true}
    className={cn('fill-gray-0', className)}
    {...props}
  >
    <svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.39683 3.76871C5.89479 5.05268 8.10521 5.05268 9.60316 3.76871L14 0H0L4.39683 3.76871Z"
        className="fill-gray-80"
      />
    </svg>
  </TooltipPrimitive.Arrow>
);

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  ref?: React.Ref<React.ElementRef<typeof TooltipPrimitive.Content>>;
}

const TooltipContent = ({ className, sideOffset = 2, ref, ...props }: TooltipContentProps) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'bg-gray-80 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-[200px] overflow-hidden rounded-md px-3 py-1.5 text-sm font-semibold text-gray-0',
      className,
    )}
    {...props}
  >
    {props.children}
    <TooltipArrow />
  </TooltipPrimitive.Content>
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
