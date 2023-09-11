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
        <Input
          placeholder="Текстовое поле"
        />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input
          placeholder="Текстовое поле"
        />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input
          placeholder="Текстовое поле"
        />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input
          placeholder="Текстовое поле"
          disabled
        />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input />
      </Stack>
    </ComponentLayout>
  );
}
