import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';
import { withThemeByClassName } from '@storybook/addon-themes';

import '@xipkg/tailwind/index.css';
import '../tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
