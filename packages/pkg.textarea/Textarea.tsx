import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const textareaVariants = cva(
  'flex w-full min-w-[250px] max-w-[600px] rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10 resize-none',
  {
    variants: {
      variant: {
        m: 'rounded-lg text-[16px]',
        s: 'rounded-md text-[14px]',
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
      error: false,
      warning: false,
    },
  },
);

const maxRows = 16;

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement> & { isMaxLengthExceeded?: boolean }, // Если максимальная длина была превышена
  ) => void;
  threshold?: number; // Порог для появления счетчика символов
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = 'm',
      error,
      warning,
      rows = 2,
      maxLength = 0,
      onChange,
      threshold = 0,
      ...props
    },
    ref,
  ) => {
    const lineHeight = variant === 'm' ? 24 : 21;

    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [charCount, setCharCount] = React.useState(0);

    React.useEffect(() => {
      if (textareaRef.current) {
        autoResize();
      }
    }, []);

    const autoResize = () => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      textarea.style.height = 'auto';

      const scrollHeight = textarea.scrollHeight;

      const currentRows = Math.ceil(scrollHeight / lineHeight);
      const newRows = Math.min(currentRows + 1, maxRows);

      const newHeight = newRows * lineHeight;
      textarea.style.height = `${newHeight}px`;

      textarea.style.overflowY = newRows >= maxRows ? 'scroll' : 'hidden';
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newCharCount = e.target.value.length;
      setCharCount(newCharCount);
      autoResize();

      if (onChange) {
        const isMaxLengthExceeded = maxLength > 0 && newCharCount > maxLength;

        const customEvent = {
          ...e,
          isMaxLengthExceeded,
        };

        onChange(customEvent);
      }
    };

    return (
      <div className="relative w-full max-w-[600px]">
        <textarea
          className={cn(
            textareaVariants({
              variant,
              error,
              warning,
              className,
            }),
          )}
          ref={(el) => {
            textareaRef.current = el;
            if (typeof ref === 'function') {
              ref(el);
            } else if (ref) {
              (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
            }
          }}
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />
        {maxLength > 0 && isFocused && charCount >= threshold && (
          <div
            className={cn(
              'absolute bottom-2 right-2 text-sm',
              charCount > maxLength ? 'text-red-80' : 'text-gray-50',
            )}
          >
            {maxLength - charCount}
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
