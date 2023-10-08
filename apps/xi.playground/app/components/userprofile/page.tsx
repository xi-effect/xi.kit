'use client';

import { Label } from '@xipkg/label';
import { Toggle } from '@xipkg/toggle';
import { UserProfile } from '@xipkg/userprofile';

export default function UserProfileDemo() {
  return (
    <>
      <div className="flex items-center space-x-2">
        <UserProfile src="/avatar.jpeg" text="Ivan Kovylyaev" label="@ikovylyaev" size="l" />
        <UserProfile preview="МК" text="Ivan Kovylyaev" label="@ikovylyaev" />
        <UserProfile text="Ivan Kovylyaev" label="@ikovylyaev" size="s" />
      </div>
    </>
  );
}
