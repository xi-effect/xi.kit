'use client';

import { Checkbox } from '@xipkg/checkbox';
import { useState } from 'react';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <Checkbox id="terms" checked={checked} onCheckedChange={() => setChecked(!checked)} />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Checkbox
          id="terms"
          size="m"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Checkbox
          id="terms"
          size="s"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Checkbox
          id="terms"
          size="m"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Checkbox
          id="terms"
          size="s"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          disabled
        />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          disabled
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          disabled
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
        />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          disabled
        />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          disabled
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          disabled
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="m"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="s"
          variant="warning"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="m"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
        <Checkbox
          id="terms"
          size="s"
          variant="error"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
        />
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
          disabled
        />
        <Checkbox
          id="terms"
          size="m"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
          disabled
        />
        <Checkbox
          id="terms"
          size="s"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          label="Label"
          isBox
          disabled
        />
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}
