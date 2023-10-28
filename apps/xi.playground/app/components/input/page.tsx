'use client';

import { Stack } from '@mui/material';
import { Input } from '@xipkg/input';

export default function InputPage() {
  return (
    <>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" variant="s"/>
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" warning />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" error />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" disabled />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input />
      </Stack>
    </>
  );
}
