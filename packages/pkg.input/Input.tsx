import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const inputVariants = cva(
  'flex w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10',
  {
    variants: {
      variant: {
        m: 'h-12 px-3 rounded-lg text-[16px]',
        s: 'h-8 px-2 rounded-md text-[14px]',
      },
      error: {
        true: 'border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80',
        false: '',
      },
      warning: {
        true: 'border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80',
        false: '',
      },
      beforeBool: {
        true: 'pl-11',
        false: '',
      },
      afterBool: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'm',
      error: false,
      warning: false,
      beforeBool: false,
      afterBool: false,
    },
  },
);

export const addsVariants = cva(
  'absolute flex',
  {
    variants: {
      variant: {
        m: 'h-6 top-3 left-3',
        s: 'h-4 top-2 left-2',
      },
    },
    defaultVariants: {
      variant: 'm',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  before?: React.ReactNode;
  beforeWrapperClassName?: string;
  after?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, error, warning, type, beforeWrapperClassName, before, after, ...props },
    ref,
  ) => {
    return (
      <div className="relative">
        {!!before && <div className={cn(addsVariants({ variant, className }))}>{before}</div>}
        <input
          type={type}
          className={cn(inputVariants({ variant, error, warning, beforeBool: !!before, afterBool: !!after, className }))}
          ref={ref}
          {...props}
        />
        {!!after && after}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
