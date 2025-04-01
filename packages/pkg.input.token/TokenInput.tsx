import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Plus } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { Button } from '@xipkg/button';

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
    },
    defaultVariants: {
      variant: 'm',
      error: false,
    },
  },
);

export interface TokenInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'disabled'>,
    VariantProps<typeof inputVariants> {}

export const TokenInput = ({ className, error, variant, ...props }: TokenInputProps) => {
  console.log('123');
  return (
    <div className="relative">
      <input
        className={cn(
          inputVariants({
            variant,
            error,
            className,
          }),
        )}
        {...props}
      />
      <Button
      variant={'default'}
              className="bg-brand-80 rounded-md absolute right-1 top-2 h-8 w-8 p-0"
            >
        <Plus className="fill-brand-20" />
      </Button>
    </div>
  );
};

TokenInput.displayName = 'TokenInput';
