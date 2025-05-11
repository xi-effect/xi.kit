'use client';

import * as React from 'react';
import { ThinArrowRight } from '@xipkg/icons';
import { ru } from "react-day-picker/locale";
import { DayPicker } from 'react-day-picker';
import { cn } from '@xipkg/utils';
import { buttonVariants } from '@xipkg/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  // Общие стили для кнопок
  const navigationButtonStyles = cn(
    buttonVariants({ variant: 'ghost' }),
    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10',
    '[&_svg]:text-gray-100',
    'dark:[&_svg]:text-gray-100'
  );

  // Стили для месяцев
  const monthClasses = {
    months: 'flex flex-col sm:flex-row space-y-4 sm:space-y-0 relative',
    month: 'space-y-4',
    month_caption: 'flex justify-center pt-1 relative items-center',
    caption_label: 'text-sm font-medium',
    nav: 'flex items-center justify-between absolute inset-x-0',
    button_previous: navigationButtonStyles,
    button_next: navigationButtonStyles,
    month_grid: 'w-full border-collapse space-y-1'
  };

  // Стили для недель
  const weekClasses = {
    weekdays: 'flex',
    weekday: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
    week: 'flex w-full mt-2'
  };

  // Стили для дней
  const dayClasses = {
    day: cn(
      'h-9 w-9 text-center text-sm p-0 relative',
      '[&:has([aria-selected].day-range-end)]:rounded-r-md',
      '[&:has([aria-selected].day-outside)]:bg-accent/50',
      '[&:has([aria-selected])]:bg-accent',
      'first:[&:has([aria-selected])]:rounded-l-md',
      'last:[&:has([aria-selected])]:rounded-r-md',
      'focus-within:relative focus-within:z-20'
    ),
    day_button: cn(
      buttonVariants({ variant: 'ghost' }),
      'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
      'text-gray-100 dark:text-gray-100',
      'hover:bg-brand-20 hover:text-accent-foreground',
      'dark:hover:bg-primary dark:hover:text-gray-0',
      'dark:[&_svg]:stroke-gray-300',
    ),
    selected: cn(
      '[&_button]:bg-brand-80 [&_button]:text-gray-0 [&_button]:hover:bg-brand-100 [&_button]:focus:bg-brand-100',
      'dark:[&_button]:bg-brand-20 dark:[&_button]:text-gray-100 dark:[&_button]:hover:bg-brand-40 dark:[&_button]:focus:bg-brand-40',
    ),
    today: cn(
      '[&_button]:bg-gray-10 [&_button]:text-gray-100',
      'dark:[&_button]:bg-gray-80 dark:[&_button]:text-gray-0',
    ),
    outside: 'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
    disabled: 'text-muted-foreground opacity-50',
    range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
    range_end: 'day-range-end'
  };

  // Прочие стили
  const miscClasses = {
    hidden: 'invisible'
  };

  const ChevronIcon = ({ orientation }: { orientation?: 'left' | 'right' | 'up' | 'down' }) => (
    <ThinArrowRight
      className={cn(
        orientation === 'left' ? '-scale-x-100 mr-1' : 'ml-1',
        'stroke-current',
        'transform origin-center',
        'mt-1'
      )}
      strokeWidth={1.5}
    />
  );

  console.log(props)

  return (
    <DayPicker
      locale={ru}
      weekStartsOn={1}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        ...monthClasses,
        ...weekClasses,
        ...dayClasses,
        ...miscClasses,
        ...classNames
      }}
      components={{
        Chevron: ({ orientation }) => <ChevronIcon orientation={orientation} />
      }}
      {...props}
    />
  );
};

export { Calendar };