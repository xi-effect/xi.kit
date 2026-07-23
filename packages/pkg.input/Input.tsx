import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const inputVariants = cva(
  'flex w-full rounded-md border-2 border-border-control bg-background-surface text-text-primary hover:border-border-strong active:border-border-control focus:border-border-strong focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-background-subtle disabled:text-text-disabled',
  {
    variants: {
      variant: {
        m: 'h-12 px-3 rounded-lg text-[16px]',
        s: 'h-8 px-2 rounded-md text-[14px]',
      },
      error: {
        true: 'border-border-error hover:border-border-error active:border-border-error focus:border-border-error',
        false: '',
      },
      warning: {
        true: 'border-status-warning-accent hover:border-status-warning-accent active:border-status-warning-accent focus:border-status-warning-accent',
        false: '',
      },
      beforeBool: {
        true: '',
        false: '',
      },
      afterBool: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'm',
        beforeBool: true,
        className: 'pl-11',
      },
      {
        variant: 's',
        beforeBool: true,
        className: 'pl-7',
      },
      {
        variant: 'm',
        afterBool: true,
        className: 'pr-11',
      },
      {
        variant: 's',
        afterBool: true,
        className: 'pr-7',
      },
    ],
    defaultVariants: {
      variant: 'm',
      error: false,
      warning: false,
      beforeBool: false,
      afterBool: false,
    },
  },
);

export const addsVariants = cva('absolute flex items-center z-50', {
  variants: {
    variant: {
      m: 'h-6 top-3',
      s: 'h-4 top-2',
    },
    beforeBool: {
      true: '',
      false: '',
    },
    afterBool: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'm',
      beforeBool: true,
      className: 'left-3',
    },
    {
      variant: 's',
      beforeBool: true,
      className: 'left-2',
    },
    {
      variant: 'm',
      afterBool: true,
      className: 'right-3',
    },
    {
      variant: 's',
      afterBool: true,
      className: 'right-2',
    },
  ],
  defaultVariants: {
    variant: 'm',
    beforeBool: false,
    afterBool: false,
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  before?: React.ReactNode;
  after?: React.ReactNode;
  beforeClassName?: string;
  afterClassName?: string;
  beforeProps?: React.HTMLAttributes<HTMLDivElement>;
  afterProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function Input({
  className,
  variant,
  error,
  warning,
  type,
  before,
  after,
  beforeClassName,
  afterClassName,
  beforeProps,
  afterProps,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {!!before && (
        <div
          className={cn(
            addsVariants({
              variant,
              beforeBool: !!before,
              afterBool: !!after,
              className: beforeClassName,
            }),
          )}
          {...beforeProps}
        >
          {before}
        </div>
      )}
      <input
        type={type}
        className={cn(
          inputVariants({
            variant,
            error,
            warning,
            beforeBool: !!before,
            afterBool: !!after,
            className,
          }),
        )}
        {...props}
      />
      {!!after && (
        <div
          className={cn(
            addsVariants({
              variant,
              beforeBool: !!before,
              afterBool: !!after,
              className: afterClassName,
            }),
          )}
          {...afterProps}
        >
          {after}
        </div>
      )}
    </div>
  );
}

Input.displayName = 'Input';
