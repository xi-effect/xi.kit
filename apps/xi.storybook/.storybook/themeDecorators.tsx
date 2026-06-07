import { ReactRenderer } from '@storybook/react';
import React, { useEffect } from 'react';
import { DecoratorFunction } from 'storybook/internal/types';

const applyTheme = (theme: string) => {
  const htmlElement = document.documentElement;

  htmlElement.setAttribute('data-theme', theme);
  htmlElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
};

const ThemeSync = ({ theme, children }: { theme: string; children: React.ReactNode }) => {
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return <>{children}</>;
};

export const themeDecorator: DecoratorFunction<ReactRenderer, { [x: string]: unknown }> = (
  Story,
  context,
) => {
  const theme = context.globals.theme ?? 'light';

  applyTheme(theme);

  return (
    <ThemeSync theme={theme}>
      <Story />
    </ThemeSync>
  );
};
