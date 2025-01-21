/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/!(*node_modules)/**/*.{jsx,tsx}',
  ],
  presets: [require('@xipkg/tailwind')],
};
