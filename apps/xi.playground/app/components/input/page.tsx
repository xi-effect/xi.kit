'use client';

import ComponentLayout from '../layout';

import { Stack } from '@mui/material';
import { Eyeon } from '@xipkg/icons';
import { Input } from '@xipkg/input';

export default function InputPage() {
  return (
    <ComponentLayout>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input startAdornment={<Eyeon sx={{ fontSize: 24 }} />} placeholder="Текстовое поле" />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input startAdornment={<Eyeon />} placeholder="Текстовое поле" error />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input startAdornment={<Eyeon />} placeholder="Текстовое поле" warning />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input startAdornment={<Eyeon />} placeholder="Текстовое поле" disabled />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input size="small" />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" size="small" />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" size="small" error />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" size="small" warning />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input placeholder="Текстовое поле" size="small" disabled />
      </Stack>
    </ComponentLayout>
  );
}
