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
        <Link>Ссылка</Link>
        <Link action={shortAction}>Ссылка</Link>
        <Link action={longAction}>Ссылка</Link>
      </Stack>

      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link href="https://github.com" color="error">
          Ссылка
        </Link>
        <Link action={shortAction} color="error">
          Ссылка
        </Link>
        <Link action={longAction} color="error">
          Ссылка
        </Link>
      </Stack>

      <Stack flexDirection="row" alignItems="center" sx={{ gap: '16px' }}>
        <Link href="https://github.com" color="success">
          Ссылка
        </Link>
        <Link onClick={shortAction} color="success">
          Ссылка
        </Link>
        <Link action={longAction} color="success">
          Ссылка
        </Link>
      </Stack>
    </Stack>
  );
}
