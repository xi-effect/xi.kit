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
    <div className="p-2 ml-auto flex flex-row items-center">
      <Button onClick={changeTheme} variant="secondary">
        Mode
      </Button>
    </div>
  );
};
