import React, { ChangeEvent, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { MaskTypeT } from './types';
import { cn } from '@xipkg/utils';
import { useMaskito } from '@maskito/react';
import { options } from './MaskConfig';

type MaskInputPropsT = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    mask?: MaskTypeT;
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
  mask = 'inviteCode',
  variant,
  error,
  className,
  ...props
}: MaskInputPropsT) => {
  const [value, setValue] = useState<string | undefined>('');
  const maskedInputRef = useMaskito({ options: options(mask) });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      ref={maskedInputRef}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      className={cn(inputVariants({ variant, className, error }))}
      {...props}
    />
  );
};
