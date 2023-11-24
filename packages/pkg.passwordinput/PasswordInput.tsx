import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';
import { Eyeoff, Eyeon } from '@xipkg/icons';
import PasswordStrength from './components/PasswordStrength';
import { usePasswordStrength } from './utils/usePasswordStrength';

export const inputWrapperVariants = cva(
  'group flex items-center w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30',
  {
    variants: {
      variant: {
        m: 'h-12 px-3 rounded-lg text-[16px]',
        s: 'h-8 px-2 rounded-md text-[14px]',
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-10 border-transparent hover:border-transparent active:border-transparent',
        false: '',
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
    },
    defaultVariants: {
      variant: 'm',
      disabled: false,
      error: false,
      warning: false,
      focus: false,
    },
  },
);

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>,
    Omit<VariantProps<typeof inputWrapperVariants>, 'disabled'> {
  wrapperClassName?: string;
  inputClassName?: string;
  showPasswordStrength?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      variant,
      error,
      warning,
      onFocus,
      onBlur,
      disabled,
      wrapperClassName,
      inputClassName,
      showPasswordStrength,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [focus, setFocus] = React.useState<boolean>(false);
    const [isHidden, setIsHidden] = React.useState(true);
    const { password, setPassword, color, message, strength, isWeak } = usePasswordStrength();
    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setFocus(false);
      onBlur && onBlur(e);
    };

    return (
      <div className="flex flex-col gap-y-2">
        <div
          className={cn(
            inputWrapperVariants({
              variant,
              disabled,
              error,
              warning,
              focus,
              className: wrapperClassName,
            }),
          )}
        >
          <input
            disabled={disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              onChange && onChange(e);
            }}
            className={
              'border-none outline-none h-full py-2 w-full bg-transparent disabled:cursor-not-allowed' +
              ' ' +
              inputClassName
            }
            ref={ref}
            {...props}
            type={isHidden ? 'password' : 'text'}
          />
          <button className="bg-transparent" onClick={() => setIsHidden(!isHidden)}>
            {!disabled &&
              (isHidden ? (
                <Eyeon
                  className={
                    'group-hover:fill-gray-70  ' + (focus ? 'fill-gray-70' : 'fill-gray-60')
                  }
                  size={variant}
                />
              ) : (
                <Eyeoff
                  className={
                    'group-hover:fill-gray-70  ' + (focus ? 'fill-gray-70' : 'fill-gray-60')
                  }
                  size={variant}
                />
              ))}
          </button>
        </div>
        {showPasswordStrength && (
          <PasswordStrength
            isWeak={isWeak}
            color={color}
            error={message}
            strength={strength}
          />
        )}
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
