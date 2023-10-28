'use client';

import { Button } from '@xipkg/button';

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <Button size="l">Test</Button>
      <Button size="l" variant="secondary">
        Test
      </Button>
      <Button size="l" variant="ghost">
        Test
      </Button>
      <Button size="m" variant="error">
        Test
      </Button>
      <Button size="s" variant="success" className="w-[200px]">
        Test
      </Button>
      <Button size="l">Test</Button>
    </div>
  );
}
