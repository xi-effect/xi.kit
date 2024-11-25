import '../tailwind.css';
// import '@xipkg/tailwind/index.css';


import type { Preview } from '@storybook/react';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
};
 
export default preview;
