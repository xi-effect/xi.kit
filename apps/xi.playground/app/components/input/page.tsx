'use client';

import { Stack } from '@mui/material';
import { Input } from '@xipkg/input';

export default function InputPage() {
  return (
    <main>
      <Stack sx={{ p: 4, width: '250px' }}>
        <Input />
      </Stack>
      <Stack sx={{ p: 4, width: '250px' }}>
        <Input placeholder="svasfvav" />
      </Stack>
    </main>
  );
}
