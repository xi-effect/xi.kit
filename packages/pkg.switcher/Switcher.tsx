'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@xipkg/utils';

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  ref?: React.Ref<React.ElementRef<typeof SwitchPrimitive.Root>>;
  size?: 's' | 'm';
}

const Switch = ({ className, size = 'm', ...props }: SwitchProps) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-brand-80 data-[state=unchecked]:bg-gray-20 inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      size === 's' ? 'h-3 w-6' : 'h-5 w-9',
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'bg-gray-0 pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
        size === 's' ? 'h-2 w-2 data-[state=checked]:translate-x-3' : 'h-4 w-4 data-[state=checked]:translate-x-4',
      )}
    />
  </SwitchPrimitive.Root>
);

export { Switch };
