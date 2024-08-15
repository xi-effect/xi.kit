'use client';

import { Calendar } from '@xipkg/calendar';
import React from 'react';

const TestComponents = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
  );
};

export default TestComponents;
