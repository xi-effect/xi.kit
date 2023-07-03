/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [require('../../packages/pkg.tailwind/design-system-preset.js')],
};
