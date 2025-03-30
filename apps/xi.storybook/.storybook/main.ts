import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@xipkg/avatar': resolve(__dirname, '../../../packages/pkg.avatar/index.ts'),
        '@xipkg/badge': resolve(__dirname, '../../../packages/pkg.badge/index.ts'),
        '@xipkg/breadcrumbs': resolve(__dirname, '../../../packages/pkg.breadcrumbs/index.ts'),
        '@xipkg/button': resolve(__dirname, '../../../packages/pkg.button/index.ts'),
        '@xipkg/calendar': resolve(__dirname, '../../../packages/pkg.calendar/index.ts'),
        '@xipkg/checkbox': resolve(__dirname, '../../../packages/pkg.checkbox/index.ts'),
        '@xipkg/contextmenu': resolve(__dirname, '../../../packages/pkg.contextmenu/index.ts'),
        '@xipkg/datepicker': resolve(__dirname, '../../../packages/pkg.datepicker/index.ts'),
        '@xipkg/dropdown': resolve(__dirname, '../../../packages/pkg.dropdown/index.ts'),
        '@xipkg/emoji.picker': resolve(__dirname, '../../../packages/pkg.emoji.picker/index.ts'),
        '@xipkg/file': resolve(__dirname, '../../../packages/pkg.file/index.ts'),
        '@xipkg/fileuploader': resolve(__dirname, '../../../packages/pkg.fileuploader/index.ts'),
        '@xipkg/form': resolve(__dirname, '../../../packages/pkg.form/index.ts'),
        '@xipkg/icons': resolve(__dirname, '../../../packages/pkg.icons/index.ts'),
        '@xipkg/input': resolve(__dirname, '../../../packages/pkg.input/index.ts'),
        '@xipkg/input.mask': resolve(__dirname, '../../../packages/pkg.input.mask/index.ts'),
        '@xipkg/input.smart': resolve(__dirname, '../../../packages/pkg.input.smart/index.ts'),
        '@xipkg/label': resolve(__dirname, '../../../packages/pkg.label/index.ts'),
        '@xipkg/link': resolve(__dirname, '../../../packages/pkg.link/index.ts'),
        '@xipkg/modal': resolve(__dirname, '../../../packages/pkg.modal/index.ts'),
        '@xipkg/popover': resolve(__dirname, '../../../packages/pkg.popover/index.ts'),
        '@xipkg/radio': resolve(__dirname, '../../../packages/pkg.radio/index.ts'),
        '@xipkg/scrollarea': resolve(__dirname, '../../../packages/pkg.scrollarea/index.ts'),
        '@xipkg/select': resolve(__dirname, '../../../packages/pkg.select/index.ts'),
        '@xipkg/sheet': resolve(__dirname, '../../../packages/pkg.sheet/index.ts'),
        '@xipkg/sidebar': resolve(__dirname, '../../../packages/pkg.sidebar/index.ts'),
        '@xipkg/slider': resolve(__dirname, '../../../packages/pkg.slider/index.ts'),
        '@xipkg/switcher': resolve(__dirname, '../../../packages/pkg.switcher/index.ts'),
        '@xipkg/tabs': resolve(__dirname, '../../../packages/pkg.tabs/index.ts'),
        '@xipkg/tailwind': resolve(__dirname, '../../../packages/pkg.tailwind'),
        '@xipkg/textarea': resolve(__dirname, '../../../packages/pkg.textarea/index.ts'),
        '@xipkg/toggle': resolve(__dirname, '../../../packages/pkg.toggle/index.ts'),
        '@xipkg/tooltip': resolve(__dirname, '../../../packages/pkg.tooltip/index.ts'),
        '@xipkg/user.profile': resolve(__dirname, '../../../packages/pkg.user.profile/index.ts'),
        '@xipkg/utils': resolve(__dirname, '../../../packages/pkg.utils/index.ts'),
      };
    }
    return config;
  },
};

export default config;
