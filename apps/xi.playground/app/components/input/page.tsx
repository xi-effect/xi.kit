'use client';

import { Stack } from '@mui/material';
import { Input } from '@xipkg/input';
import beforeIcon from '../../../public/beforeIcon.svg';
import afterIcon from '../../../public/afterIcon.svg';

export default function InputPage() {
  return (
    <>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input before={<img src={beforeIcon.src} />} />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input variant="s" before={<img src={beforeIcon.src} width={16} height={16} />} />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input after={<img src={afterIcon.src} />} />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input variant="s" after={<img src={afterIcon.src} width={16} height={16} />} />
      </Stack>
      <Stack sx={{ p: 2, width: '250px' }}>
        <Input after="минут" />
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
