import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const inputVariants = cva(
  'flex items-center w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10',
  {
    variants: {
      variant: {
        m: 'h-12 px-3 rounded-lg text-[16px]',
        s: 'h-8 px-2 rounded-md text-[14px]',
      },
      focus: {
        true: 'border-gray-80 hover:border-gray-80 outline-none',
        fasle: '',
      },
      error: {
        true: 'border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80',
        false: '',
      },
      warning: {
        true: 'border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80',
        false: '',
      },
      before: {
        true: 'pl-3 gap-x-2',
        false: '',
      },
      after: {
        true: 'pr-3',
        false: '',
      },
      afterString: {
        true: 'gap-x-2',
        false: '',
      }
    },
    compoundVariants: [
      {
        variant: 's',
        before: true,
        className: 'pl-2 gap-x-1',
      },
      {
        variant: 's',
        after: true,
        className: 'pr-2',
      },
    ],
    defaultVariants: {
      variant: 'm',
      error: false,
      warning: false,
      before: false,
      focus: false,
      after: false,
      afterString: false
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, 'before' | 'after' | 'afterString'> {
  before?: JSX.Element | string;
  after?: JSX.Element | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, warning, type, before, after, onFocus, onBlur, ...props }, ref) => {
    const [focus, setFocus] = React.useState<boolean>(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setFocus(false);
      onBlur && onBlur(e);
    };

    return (
      <div
        className={cn(
          inputVariants({
            variant,
            error,
            warning,
            className,
            before: Boolean(before),
            after: Boolean(after),
            focus,
            afterString: typeof after === 'string'
          }),
        )}
      >
        <div>{before}</div>
        <input
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="border-none outline-none h-full py-2 w-full"
          type={type}
          ref={ref}
          {...props}
        />
        <div className='text-gray-60'>{after}</div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
