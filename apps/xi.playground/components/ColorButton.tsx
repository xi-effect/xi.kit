'use client';

import { useTheme } from 'next-themes';
import { Button } from '@xipkg/button';

export const ColorButton = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  return (
    <div className="p-2 flex flex-row items-center justify-center">
      <Button onClick={changeTheme} variant="secondary">
        Mode
      </Button>
    </div>
  );
};
