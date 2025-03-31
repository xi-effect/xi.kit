'use client';

import * as React from 'react';
import { ThinArrowRight } from '@xipkg/icons';
import { ru } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import { cn } from '@xipkg/utils';
import { buttonVariants } from '@xipkg/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <DayPicker
      locale={ru}
      weekStartsOn={1}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium text-gray-100 dark:text-gray-0',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-gray-60 dark:text-gray-40 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-10/50 dark:[&:has([aria-selected].day-outside)]:bg-gray-80/50 [&:has([aria-selected])]:bg-gray-10 dark:[&:has([aria-selected])]:bg-gray-80 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-gray-100 dark:text-gray-0',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-brand-80 text-gray-0 dark:bg-brand-20 dark:text-gray-100 hover:bg-brand-100 dark:hover:bg-brand-40 focus:bg-brand-100 dark:focus:bg-brand-40',
        day_today:
          'bg-gray-10 text-gray-100 dark:bg-gray-80 dark:text-gray-0',
        day_outside:
          'day-outside text-gray-60 dark:text-gray-40 opacity-50 aria-selected:bg-gray-10/50 dark:aria-selected:bg-gray-80/50 aria-selected:text-gray-60 dark:aria-selected:text-gray-40 aria-selected:opacity-30',
        day_disabled: 'text-gray-60 dark:text-gray-40 opacity-50',
        day_range_middle:
          'aria-selected:bg-gray-10 aria-selected:text-gray-100 dark:aria-selected:bg-gray-80 dark:aria-selected:text-gray-0',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          return <ThinArrowRight className={orientation === 'left' ? 'rotate-180' : ''} />;
        }
      }}
      {...props}
    />
  );
};

export { Calendar };
