'use client';

import { Label } from '@xipkg/label';
import { Toggle } from '@xipkg/toggle';
import { UserProfile } from '@xipkg/userprofile';

export default function UserProfileDemo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <UserProfile src="/avatar.jpg" text="Ivan Kovylyaev" label="@ikovylyaev" size="l" />
        <UserProfile src="/avatar.jpg" text="Ivan Kovylyaev" label="@ikovylyaev" size="m" />
        <UserProfile src="/avatar.jpg" text="Ivan Kovylyaev" label="@ikovylyaev" size="s" />
        <UserProfile preview="МК" text="Ivan Kovylyaev" label="@ikovylyaev" size="l" />
        <UserProfile preview="МК" text="Ivan Kovylyaev" label="@ikovylyaev" size="m" />
        <UserProfile preview="МК" text="Ivan Kovylyaev" label="@ikovylyaev" size="s" />
      </div>
    </>
  );
}
