'use client';

import { Label } from '@xipkg/label';
import { Toggle } from '@xipkg/toggle';

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
