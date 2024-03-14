'use client';

import { Label } from '@xipkg/label';
import { Toggle } from '@xipkg/toggle';
import { UserProfile } from '@xipkg/userprofile';

export default function UserProfileDemo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <UserProfile userId={2} text="Ivan Kovylyaev" label="@ikovylyaev" size="l" />
        <UserProfile userId={2} text="Ivan Kovylyaev" label="@ikovylyaev" size="m" />
        <UserProfile userId={2} text="Ivan Kovylyaev" label="@ikovylyaev" size="s" />
        <UserProfile userId={0} text="Ivan Kovylyaev" label="@ikovylyaev" size="l" />
        <UserProfile userId={0} text="Ivan Kovylyaev" label="@ikovylyaev" size="m" />
        <UserProfile userId={0} text="Ivan Kovylyaev" label="@ikovylyaev" size="s" />
      </div>
    </>
  );
}
