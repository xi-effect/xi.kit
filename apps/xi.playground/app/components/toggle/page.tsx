'use client';

import { Label } from '@xipkg/label';
import { Toggle } from '@xipkg/toggle';

export default function SwitchDemo() {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Toggle size="l" id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Toggle size="m" id="airplane-mode-1" />
        <Label htmlFor="airplane-mode-1">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Toggle size="s" id="airplane-mode-2" />
        <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Toggle id="airplane-mode-3" />
        <Label htmlFor="airplane-mode-3">Airplane Mode</Label>
      </div>
    </>
  );
}
