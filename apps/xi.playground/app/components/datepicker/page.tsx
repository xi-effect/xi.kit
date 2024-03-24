'use client';

import { DatePicker } from '@xipkg/datepicker';
import React from 'react';
import { format } from 'date-fns';
import { cn } from '@xipkg/utils';
import { Input } from '@xipkg/input';
import { Calendar } from '@xipkg/icons';
import { ru } from 'date-fns/locale';

const TestComponents = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <DatePicker mode="single" selected={date} onSelect={setDate}>
      <Input
        value={date ? format(date, 'PPP', { locale: ru }) : ''}
        variant="m"
        className={cn('w-[280px] justify-start text-left font-normal cursor-pointer')}
        after={<Calendar className="h-6 w-6 fill-gray-60" />}
      />
    </DatePicker>
  );
};

export default TestComponents;
