'use client';

import * as React from 'react';

import { cn } from '@xipkg/utils';
import { Calendar } from '@xipkg/calendar';
import { ru } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from '@xipkg/popover';

interface DatePickerProps {
  children: React.ReactNode;
  classNamePopoverTrigger?: string;
  classNamePopoverContent?: string;
  popoverProps?: React.ComponentProps<typeof Popover>;
  popoverTriggerProps?: React.ComponentProps<typeof PopoverTrigger>;
  popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
}

const DatePicker = ({
  children,
  classNamePopoverTrigger,
  classNamePopoverContent,
  popoverProps,
  popoverTriggerProps,
  popoverContentProps,
  ...calendarProps
}: DatePickerProps) => {
  return (
    <Popover {...popoverProps}>
      <PopoverTrigger className={classNamePopoverTrigger} asChild {...popoverTriggerProps}>
        {children}
      </PopoverTrigger>
      <PopoverContent
        className={cn('w-auto p-0 bg-gray-0 dark:bg-gray-100', classNamePopoverContent)}
        {...popoverContentProps}
      >
        <Calendar {...calendarProps} locale={ru} />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
