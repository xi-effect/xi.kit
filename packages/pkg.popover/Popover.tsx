'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@xipkg/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  ref?: React.Ref<React.ElementRef<typeof PopoverPrimitive.Content>>;
  container?: HTMLElement;
}

const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  container,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal container={container}>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'bg-gray-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-gray-10 z-50 w-72 rounded-md border-2 p-4 text-gray-100 shadow-md outline-none',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
);

export { Popover, PopoverTrigger, PopoverContent };
