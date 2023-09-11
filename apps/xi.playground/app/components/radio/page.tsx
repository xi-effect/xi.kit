'use client';

import { Label } from '@xipkg/label';
import { Radio, RadioItem } from '@xipkg/radio';

const TestComponent = () => (
  <>
    <Radio defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </Radio>
  </>
);

export default TestComponent;
