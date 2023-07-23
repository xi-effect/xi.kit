'use client';

import { useTheme } from 'next-themes';
import { Switch, Typography } from '@mui/material';
import { useState } from 'react';

const ColorButton = () => {
  const { theme, setTheme } = useTheme();

  const [darkMode, setDarkMode] = useState<boolean>(theme === 'dark');

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  const onChangeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    changeTheme();
    setDarkMode(value);
  };

  return (
    <div className="flex flex-row space-10-px items-center ml-auto">
      <Typography variant="m">Mode:</Typography>
      <Switch checked={darkMode} onChange={onChangeMode} defaultChecked={theme === 'dark'} />
    </div>
  );
};

export default ColorButton;
