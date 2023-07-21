'use client';

import { useTheme } from 'next-themes';

const ColorButton = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  return (
    <div>
      <button onClick={changeTheme}>Mode</button>
    </div>
  );
};

export default ColorButton;
