/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/pkg.button/!(*node_modules)/**/*.{js,ts,jsx,tsx,mdx}', // путь указан конкретно до кнопки, только для того что бы быстрее собрался проект
  ],
  presets: [require('@xipkg/tailwind')],
};
