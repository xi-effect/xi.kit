'use client';

import { Link } from '@xipkg/link';
import { Stack } from '@mui/material';

export default function ButtonPage() {
  const shortAction = () => {
    console.log('shor action is completed');
  };

  const longAction = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('long action is completed');
        resolve('completed');
      }, 3000);
    });

  return (
    <Stack spacing={2}>
      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link href="https://github.com">Ссылка</Link>
        <Link action={shortAction}>Ссылка</Link>
        <Link action={longAction}>Ссылка</Link>
      </Stack>
    </Stack>
  );
}