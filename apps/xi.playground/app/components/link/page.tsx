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
        <Link href="https://github.com">Ссылка</Link>
        <Link href="https://github.com">Ссылка</Link>
      </Stack>

      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
      </Stack>

      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
      </Stack>
      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link size="s" theme="brand" variant="always" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" variant="none" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" variant="hover" href="https://github.com">
          Ссылка
        </Link>
      </Stack>
      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px', bgcolor: 'var(--xi-brand-80)' }}>
        <Link size="s" theme="white" variant="always" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="white" variant="none" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="white" variant="hover" href="https://github.com">
          Ссылка
        </Link>
      </Stack>
    </Stack>
  );
}
