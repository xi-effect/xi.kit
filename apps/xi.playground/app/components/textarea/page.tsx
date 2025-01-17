'use client';

import { Textarea } from '@xipkg/textarea';
import React, { useState } from 'react';

export default function InputPage() {
  const [text, setText] = useState<string>('');

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> & { isMaxLengthExceeded?: boolean },
  ) => {
    setText(e.target.value);

    if (e.isMaxLengthExceeded) {
      console.log('Warning: Max length exceeded!');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Textarea />
      <Textarea variant={'s'} />
      <Textarea maxLength={50} onChange={handleTextareaChange} value={text} />
      <Textarea variant={'s'} maxLength={50} />
      <Textarea placeholder="Многострочное поле" />
      <Textarea variant={'s'} placeholder="Многострочное поле" />
      <Textarea error />
      <Textarea error variant={'s'} />
      <Textarea warning />
      <Textarea warning variant={'s'} />
      <Textarea disabled placeholder="Многострочное поле" />
      <Textarea disabled variant={'s'} placeholder="Многострочное поле" />
      <Textarea maxLength={100} threshold={50} />
      <Textarea variant={'s'} maxLength={100} threshold={50} />
    </div>
  );
}
