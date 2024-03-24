'use client';

import * as React from 'react';

import { cn } from '@xipkg/utils';
import { Calendar } from '@xipkg/calendar';
import { ru } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from '@xipkg/popover';

type DatePickerPropsT = {
  children: React.ReactNode;
  classNamePopoverTrigger?: string;
  classNamePopoverContent?: string;
} & React.ComponentProps<typeof Calendar>;

const DatePicker = ({
  children,
  classNamePopoverTrigger,
  classNamePopoverContent,
  ...calendarProps
}: DatePickerPropsT) => {
  return (
    <Popover>
      <PopoverTrigger className={classNamePopoverTrigger} asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto p-0', classNamePopoverContent)}>
        <Calendar {...calendarProps} locale={ru} />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
