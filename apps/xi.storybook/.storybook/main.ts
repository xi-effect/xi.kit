import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname, resolve } from 'path';

/**
 * Функция для получения абсолютного пути к package.json пакета.
 * Используется в монорепозиториях или с Yarn PnP.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: { name: getAbsolutePath('@storybook/react-vite'), options: {} },
  // Добавляем настройку Vite для корректного резолвинга путей и HMR
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@xipkg/button',
            replacement: resolve(__dirname, '../../../packages/pkg.button/index.ts'),
          },
          {
            find: '@xipkg/utils',
            replacement: resolve(__dirname, '../../../packages/pkg.utils/index.ts'),
          },
          {
            find: '@xipkg/input',
            replacement: resolve(__dirname, '../../../packages/pkg.input/index.ts'),
          },
        ],
      },
    };
  },
};

export default config;
