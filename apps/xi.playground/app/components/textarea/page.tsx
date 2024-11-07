'use client';

import { Textarea } from '@xipkg/textarea';
import React from 'react';

export default function InputPage() {
  return (
    <div className='flex flex-col gap-4'>
      <Textarea />
      <Textarea variant={'s'} />
      <Textarea maxLength={50} />
      <Textarea variant={'s'} maxLength={50} />
      <Textarea placeholder="Многострочное поле" />
      <Textarea variant={'s'} placeholder="Многострочное поле" />
      <Textarea error />
      <Textarea error variant={'s'} />
      <Textarea warning />
      <Textarea warning variant={'s'} />
      <Textarea disabled placeholder="Многострочное поле" />
      <Textarea disabled variant={'s'} placeholder="Многострочное поле" />
    </div>
  );
}
