'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@xipkg/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ref?: React.Ref<React.ElementRef<typeof SliderPrimitive.Root>>;
}

export const Slider = ({ className, ...props }: SliderProps) => (
  <SliderPrimitive.Root
    className={cn('relative flex w-full touch-none items-center select-none', className)}
    {...props}
  >
    <SliderPrimitive.Track className="bg-gray-30 relative h-1 w-full grow overflow-hidden rounded-lg">
      <SliderPrimitive.Range className="bg-brand-80 absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bg-brand-80 ring-offset-background block h-4 w-4 cursor-pointer rounded-full transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
);

Slider.displayName = SliderPrimitive.Root.displayName;
