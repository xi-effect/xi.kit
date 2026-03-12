'use client';

import * as React from 'react';
import { ThinArrowRight } from '@xipkg/icons';
import { ru } from 'react-day-picker/locale';
import { DayPicker } from 'react-day-picker';
import { cn } from '@xipkg/utils';
import { buttonVariants } from '@xipkg/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/** По умолчанию при показе двух месяцев включена постраничная навигация (переключение на 2 месяца). */
const DEFAULT_PAGED_NAVIGATION_WHEN_TWO_MONTHS = true;

// Общие стили для кнопок
const navigationButtonStyles = cn(
  buttonVariants({ variant: 'ghost' }),
  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10',
  '[&_svg]:text-gray-100',
  'dark:[&_svg]:text-gray-100',
);

// Стили для месяцев (в т.ч. для режима с двумя месяцами — flex-row и отступ между ними)
const monthClasses = {
  months: 'flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:gap-6 relative',
  month: 'space-y-4',
  month_caption: 'flex justify-center pt-1 relative items-center',
  caption_label: 'text-sm font-medium',
  nav: 'flex items-center justify-between absolute px-1 inset-x-0',
  button_previous: navigationButtonStyles,
  button_next: navigationButtonStyles,
  month_grid: 'w-full border-collapse space-y-1',
};

// Стили для недель
const weekClasses = {
  weekdays: 'flex',
  weekday: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
  week: 'flex w-full mt-2',
};

// Уникальный класс для середины диапазона — нужен для повышения специфичности (перебивает .selected)
const RANGE_MIDDLE_CLASS = 'xipkg-calendar-range-middle';

// Промежуточные дни диапазона: только мягкая заливка, без вида «кнопки»
// Вариант [&.xipkg-calendar-range-middle]: даёт селектор из двух классов и перекрывает selectedButtonStyles
const rangeBetweenButtonStyles = cn(
  RANGE_MIDDLE_CLASS,
  '[&.xipkg-calendar-range-middle]:[&_button]:!bg-brand-20/50',
  '[&.xipkg-calendar-range-middle]:[&_button]:!text-gray-100',
  '[&.xipkg-calendar-range-middle]:[&_button]:!rounded-none',
  '[&.xipkg-calendar-range-middle]:[&_button]:hover:!bg-brand-30',
  '[&.xipkg-calendar-range-middle]:[&_button]:focus:!bg-brand-30',
  'dark:[&.xipkg-calendar-range-middle]:[&_button]:!bg-brand-10',
  'dark:[&.xipkg-calendar-range-middle]:[&_button]:!text-gray-100',
  'dark:[&.xipkg-calendar-range-middle]:[&_button]:hover:!bg-brand-20',
  'dark:[&.xipkg-calendar-range-middle]:[&_button]:focus:!bg-brand-20',
);

// Стиль «активной кнопки» только для начала/конца диапазона и одиночной даты
const selectedButtonStyles = cn(
  '[&_button]:!bg-brand-80 [&_button]:!text-gray-0',
  '[&_button]:hover:!bg-brand-100 [&_button]:focus:!bg-brand-100',
  'dark:[&_button]:!bg-brand-20 dark:[&_button]:!text-gray-100',
  'dark:[&_button]:hover:!bg-brand-40 dark:[&_button]:focus:!bg-brand-40',
);


// Стили для дней
const dayClasses = {
  day: cn(
    'h-9 w-9 text-center text-sm p-0 relative',
    'first:[&:has([aria-selected])]:[&_button]:rounded-l-md',
    'last:[&:has([aria-selected])]:[&_button]:rounded-r-md',
    '[&:has([aria-selected].day-range-end)]:[&_button]:rounded-r-md',
    'focus-within:relative focus-within:z-20',
  ),
  day_button: cn(
    buttonVariants({ variant: 'none' }),
    'h-9 w-9 p-0 font-normal rounded-md',
    'text-gray-100 dark:text-gray-100',
  ),
  selected: selectedButtonStyles,
  range_start: cn('[&_button]:rounded-r-none', selectedButtonStyles),
  range_end: cn('[&_button]:rounded-l-none day-range-end', selectedButtonStyles),
  range_middle: rangeBetweenButtonStyles,
  today: cn(
    '[&_button]:bg-brand-20 [&_button]:text-gray-100 [&_button]:font-medium',
    'dark:[&_button]:bg-gray-80 dark:[&_button]:text-gray-0',
  ),
  outside:
    'day-outside text-muted-foreground opacity-50 [&:has([aria-selected])]:opacity-100',
  disabled: 'text-muted-foreground opacity-50',
};

// Прочие стили
const miscClasses = {
  hidden: 'invisible',
};

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  numberOfMonths = 1,
  pagedNavigation,
  ...rest
}: CalendarProps) => (
  <DayPicker
    locale={ru}
    weekStartsOn={1}
    showOutsideDays={showOutsideDays}
    numberOfMonths={numberOfMonths}
    pagedNavigation={
      pagedNavigation ??
      (DEFAULT_PAGED_NAVIGATION_WHEN_TWO_MONTHS && numberOfMonths > 1)
    }
    className={cn('p-3', className)}
    classNames={{
      ...monthClasses,
      ...weekClasses,
      ...dayClasses,
      ...miscClasses,
      ...classNames,
    }}
    components={{
      Chevron: ({ orientation }) => (
        <ThinArrowRight
          className={cn(
            orientation === 'left' ? 'mr-1 -scale-x-100' : 'ml-1',
            'mt-1 origin-center transform stroke-current',
          )}
          // strokeWidth={1.5}
        />
      ),
    }}
    {...rest}
  />
);

export { Calendar };
