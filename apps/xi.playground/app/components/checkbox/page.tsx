'use client';

import { Checkbox } from '@xipkg/checkbox';
import { useState } from 'react';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  const onToggle = () => setChecked((prev) => !prev);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Checkbox checked={checked} onCheckedChange={onToggle} size="l">
          Peepepe
        </Checkbox>
        <button className="p-1 rounded-md" onClick={onToggle}>
          {`${checked}`}
        </button>
      </div>
      <Checkbox size="m">Peepepe</Checkbox>
      <Checkbox size="s" checked>
        Peepepe
      </Checkbox>
      <Checkbox size="l" disabled>
        Peepepe
      </Checkbox>
      <Checkbox size="l" checked disabled>
        Peepepe
      </Checkbox>
      <Checkbox state="warning" size="l">
        Peepepe
      </Checkbox>
      <Checkbox state="warning" checked size="l">
        Peepepe
      </Checkbox>
      <Checkbox state="error" size="l">
        Peepepe
      </Checkbox>
      <Checkbox state="error" checked size="l">
        Peepepe
      </Checkbox>
    </div>
  );
}
