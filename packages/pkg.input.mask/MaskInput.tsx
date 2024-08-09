import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { setMask } from './MaskVariant';
import { MaskType } from './types';
import { cn } from '@xipkg/utils';

type MaskInputPropsT = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    mask?: MaskType;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export const inputVariants = cva(
  'flex w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-20 disabled:cursor-not-allowed disabled:bg-gray-10',
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
  },
);

export const MaskInput = ({
  onChange,
  placeholder,
  mask,
  variant,
  error,
  className,
}: MaskInputPropsT) => {
  const [value, setValue] = useState<string | undefined>('');
  const [isFocused, setFocused] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = setMask(mask, e);

    setValue(newValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder={isFocused ? placeholder : ''}
      value={value}
      className={cn(inputVariants({ variant, className, error }))}
    />
  );
};
