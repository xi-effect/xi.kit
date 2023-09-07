'use client';

import { Button } from '@xipkg/button';

export default function ButtonPage() {
  return (
    <div className="flex flex-column gap-5 h-full">
      <Button size="l">
        Test
      </Button>
      <Button size="l" variant="secondary">
        Test
      </Button>
      <Button size="l" variant="ghost">
        Test
      </Button>
      <Button size="m" variant="error">
        Test
      </Button>
      <Button size="s" variant="success">
        Test
      </Button>
    </div>
  );
}
