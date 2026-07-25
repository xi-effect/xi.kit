'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@xipkg/utils';

const checkboxVariants = cva(
  'shrink-0 p-0.5 peer data-[state=checked]:text-action-primary-text data-[state=checked]:bg-action-primary-background-default data-[state=checked]:border-action-primary-background-default disabled:!cursor-not-allowed disabled:!bg-background-subtle disabled:!text-text-disabled disabled:!border-0 border bg-background-surface border-border-control',
  {
    variants: {
      size: {
        l: 'w-6 h-6 rounded-md',
        m: 'w-5 h-5 rounded-md',
        s: 'w-4 h-4 rounded-[0.250rem]',
      },
      state: {
        default:
          'data-[state=checked]:group-hover:bg-action-primary-background-pressed group-hover:bg-background-subtle group-hover:border-border-control',
        warning:
          'border-status-warning-accent data-[state=checked]:!bg-status-warning-accent data-[state=checked]:!border-status-warning-accent',
        error:
          'border-status-error-accent data-[state=checked]:!bg-status-error-accent data-[state=checked]:!border-status-error-accent',
      },
    },
    defaultVariants: {
      size: 'm',
      state: 'default',
    },
  },
);

const labelVariants = cva(
  'inline-flex group focus-visible:ring-2 ring-border-focus ring-offset-4 ring-offset-bkgd-main text-text-primary items-center gap-2',
  {
    variants: {
      size: {
        l: 'gap-2 leading-[22px]',
        m: 'gap-[0.375rem] text-sm',
        s: 'gap-1 text-xs',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  },
);

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof labelVariants & typeof checkboxVariants> {
  checkboxStyles?: string;
}

export const Checkbox = ({
  className,
  checkboxStyles,
  children = null,
  size,
  state,
  disabled,
  ...props
}: CheckboxProps) => (
  <label className={cn(labelVariants({ size }), className, !disabled && 'hover:cursor-pointer')}>
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants({ size, state }), checkboxStyles)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Check className="h-full w-full" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {children && <span className="pb-[0.125rem] peer-disabled:text-text-muted">{children}</span>}
  </label>
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
