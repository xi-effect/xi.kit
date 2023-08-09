'use client';

import { useTheme } from 'next-themes';
import { Button } from '@xipkg/button';
import { Stack } from '@mui/material';

export const ColorButton = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  return (
    <Stack flexDirection="row" alignItems="center" sx={{ p: 2, ml: 'auto' }}>
      <Button onClick={changeTheme} variant="outlined">
        Mode
      </Button>
    </Stack>
  );
};
