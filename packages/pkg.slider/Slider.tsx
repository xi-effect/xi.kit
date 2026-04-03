'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@xipkg/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ref?: React.Ref<React.ElementRef<typeof SliderPrimitive.Root>>;
  /** Кастомные стили для трека слайдера */
  trackClassName?: string;
  /** Кастомные стили для заполненной части трека (range) */
  rangeClassName?: string;
  /** Кастомные стили для ползунка (thumb) */
  thumbClassName?: string;
  /** Минимальное допустимое значение. Зона от min до restrictedMin визуально помечается как недоступная */
  restrictedMin?: number;
  /** Максимальное допустимое значение. Зона от restrictedMax до max визуально помечается как недоступная */
  restrictedMax?: number;
  /** Кастомные стили для недоступной зоны трека */
  restrictedClassName?: string;
}

export const Slider = ({
  className,
  trackClassName,
  rangeClassName,
  thumbClassName,
  restrictedMin,
  restrictedMax,
  restrictedClassName,
  min = 0,
  max = 100,
  value: valueProp,
  defaultValue,
  onValueChange,
  onValueCommit,
  ...props
}: SliderProps) => {
  const hasRestrictions = restrictedMin !== undefined || restrictedMax !== undefined;

  const clamp = React.useCallback(
    (values: number[]) =>
      values.map((v) => {
        let c = v;
        if (restrictedMin !== undefined) c = Math.max(c, restrictedMin);
        if (restrictedMax !== undefined) c = Math.min(c, restrictedMax);
        return c;
      }),
    [restrictedMin, restrictedMax],
  );

  const [internalValue, setInternalValue] = React.useState(() =>
    clamp(valueProp ?? defaultValue ?? [min]),
  );

  const isControlled = valueProp !== undefined;

  React.useEffect(() => {
    if (isControlled) setInternalValue(clamp(valueProp));
  }, [isControlled, valueProp, clamp]);

  const handleValueChange = React.useCallback(
    (values: number[]) => {
      if (hasRestrictions) {
        const clamped = clamp(values);
        setInternalValue(clamped);
        onValueChange?.(clamped);
      } else {
        onValueChange?.(values);
      }
    },
    [hasRestrictions, clamp, onValueChange],
  );

  const handleValueCommit = React.useCallback(
    (values: number[]) => {
      onValueCommit?.(hasRestrictions ? clamp(values) : values);
    },
    [hasRestrictions, clamp, onValueCommit],
  );

  const range = max - min;
  const restrictedMinPercent =
    restrictedMin !== undefined ? ((restrictedMin - min) / range) * 100 : undefined;
  const restrictedMaxPercent =
    restrictedMax !== undefined ? ((max - restrictedMax) / range) * 100 : undefined;

  const sliderValueProps = hasRestrictions
    ? { value: internalValue }
    : {
        ...(valueProp !== undefined && { value: valueProp }),
        ...(defaultValue !== undefined && { defaultValue }),
      };

  const thumbCount =
    valueProp?.length ??
    (hasRestrictions ? internalValue.length : defaultValue?.length) ??
    1;

  return (
    <SliderPrimitive.Root
      className={cn(
        // Radix рендерит трек и ползунки прямыми детьми: первый span — Track, остальные — обёртки Thumb
        // (className на Thumb попадает только на внутренний span с role="slider"), поэтому z-index задаём селектором на внешнюю обёртку ползунка
        'relative isolate flex w-full touch-none items-center select-none [&>span:first-child]:z-0 [&>span:not(:first-child)]:z-20',
        className,
      )}
      min={min}
      max={max}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      {...sliderValueProps}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          'bg-gray-30 relative h-1 w-full grow overflow-hidden rounded-lg',
          trackClassName,
        )}
      >
        <SliderPrimitive.Range className={cn('bg-brand-80 absolute h-full', rangeClassName)} />
        {restrictedMinPercent !== undefined && (
          <div
            className={cn('absolute left-0 top-0 z-1 h-full bg-gray-10', restrictedClassName)}
            style={{ width: `${restrictedMinPercent}%` }}
          />
        )}
        {restrictedMaxPercent !== undefined && (
          <div
            className={cn('absolute right-0 top-0 z-1 h-full bg-gray-10', restrictedClassName)}
            style={{ width: `${restrictedMaxPercent}%` }}
          />
        )}
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            'bg-brand-80 ring-offset-background block h-4 w-4 cursor-pointer rounded-full transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
            thumbClassName,
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
};

Slider.displayName = SliderPrimitive.Root.displayName;
