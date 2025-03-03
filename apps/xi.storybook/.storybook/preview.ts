import type { Preview } from '@storybook/react';

import '../src/index.css';
import { themeDecorator } from './themeDecorators';

export const globalTypes: Preview['globalTypes'] = {
  theme: {
    name: 'Theme',
    description: 'Переключение темы',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Светлая тема' },
        { value: 'dark', title: 'Темная тема' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      disable: true,
    },
  },
  decorators: [themeDecorator],
};

export default preview;
