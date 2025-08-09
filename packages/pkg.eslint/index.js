// eslint.config.js (или .mjs, если нужно)
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  // Глобальные игноры
  { ignores: ['dist'] },

  // База по JS
  js.configs.recommended,

  // База по TS
  ...tseslint.configs.recommended,

  // Типо-осведомлённые правила TS (включают rules, требующие type info)
  ...tseslint.configs.recommendedTypeChecked,

  // Общие настройки для исходников на TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        // включает Project Service для подхвата tsconfig'ов и типовой инфы
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      semi: ['error', 'always'],
    },
  },

  // React Hooks под ESLint 9 (новый пресет)
  reactHooks.configs['recommended-latest'],

  // React Refresh: вариант для Vite (ставит allowConstantExport: true)
  // Если не на Vite — можно заменить на reactRefresh.configs.recommended
  reactRefresh.configs.vite,
);
