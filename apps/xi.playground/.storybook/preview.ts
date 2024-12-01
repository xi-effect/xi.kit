import '../tailwind.css';
// import '@xipkg/tailwind/index.css';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    docs: { 
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
