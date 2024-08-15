'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@xipkg/select';
import { Button } from '@xipkg/button';

export default function SelectDemo() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex gap-2 flex-col mt-2">
        <Button onClick={() => console.log('тык')}>Тык</Button>
        <Button onClick={() => console.log('тык 2')}>Тык 2</Button>
        <Button onClick={() => console.log('тык 3')}>Тык 3</Button>
      </div>
    </>
  );
}
