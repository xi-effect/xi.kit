'use client';

import { Checkbox } from '@xipkg/checkbox';

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Checkbox size="l">Peepepe</Checkbox>
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
      <Checkbox state="varning" size="l">
        Peepepe
      </Checkbox>
      <Checkbox state="varning" checked size="l">
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
