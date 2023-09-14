'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@xipkg/utils';

export const toggleVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-80 data-[state=checked]:hover:bg-brand-100 data-[state=unchecked]:bg-gray-20 data-[state=unchecked]:hover:bg-gray-30',
  {
    variants: {
      size: {
        l: 'h-8 w-14 border-4',
        m: 'h-6 w-10 border-4',
        s: 'h-4 w-7 border-2',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  },
);

export const toggleThumbVariants = cva(
  'pointer-events-none block rounded-full bg-gray-0 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        l: 'h-5 w-5 data-[state=checked]:translate-x-7',
        m: 'h-4 w-4 data-[state=checked]:translate-x-4',
        s: 'h-3 w-3 data-[state=checked]:translate-x-3',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  },
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof toggleVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ size, className, ...props }, ref) => (
    <SwitchPrimitives.Root className={toggleVariants({ size, className })} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={toggleThumbVariants({ size })} />
    </SwitchPrimitives.Root>
  ),
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
