'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@xipkg/utils';

const checkboxVariants = cva(
  'shrink-0 p-[2px]  peer data-[state=checked]:text-gray-0 data-[state=checked]:bg-brand-80 data-[state=checked]:border-brand-80 disabled:!cursor-not-allowed disabled:!bg-gray-10 disabled:!text-gray-30 disabled:!border-0 border bg-gray-0 border-gray-30',
  {
    variants: {
      size: {
        l: 'w-6 h-6 rounded-md',
        m: 'w-5 h-5 rounded-md',
        s: 'w-4 h-4 rounded-[0.250rem]',
      },
      state: {
        default:
          'data-[state=checked]:group-hover:bg-brand-100 group-hover:bg-gray-5 group-hover:border-gray-30',
        varning:
          'border-orange-80 data-[state=checked]:!bg-orange-80 data-[state=checked]:!border-orange-80',
        error: 'border-red-80 data-[state=checked]:!bg-red-80 data-[state=checked]:!border-red-80',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const labelVariants = cva(
  'flex group focus-visible:ring-2 ring-brand-80 ring-offset-4 text-gray-100 items-center gap-2',
  {
    variants: {
      size: {
        l: 'gap-2 leading-[22px]',
        m: 'gap-[0.375rem] text-sm',
        s: 'gap-1 text-xs',
      },
    },
  },
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof labelVariants & typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, children = null, size, state, ...props }, ref) => (
  <label className={labelVariants({ size })}>
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ size, state }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Check className="w-full h-full" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {children && <span className="pb-[0.125rem] peer-disabled:text-gray-50">{children}</span>}
  </label>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
