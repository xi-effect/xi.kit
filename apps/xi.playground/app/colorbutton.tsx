'use client';

import { useTheme } from 'next-themes';
import { Button } from '@xipkg/button';

const ColorButton = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  return (
    <div className="flex flex-row space-10-px items-center ml-auto p-2">
      <Button onClick={changeTheme} variant="outlined">
        Mode
      </Button>
    </div>
  );
};

export default ColorButton;
