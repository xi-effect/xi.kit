/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/!(*node_modules)/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@xipkg/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('@xipkg/tailwind')],
};
