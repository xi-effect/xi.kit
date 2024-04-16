'use client';

import { Button } from '@xipkg/button';

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <Button size="l">Large</Button>
      <Button size="l" variant="secondary">
        Large
      </Button>
      <Button size="l" variant="ghost">
        Large
      </Button>
      <Button size="m" variant="error">
        Medium
      </Button>
      <Button size="s" variant="success" className="w-[200px]">
        Small
      </Button>
      <Button size="l">Large</Button>
      <Button size="s" variant="secondary-error">
        Secondary Error
      </Button>
    </div>
  );
}
