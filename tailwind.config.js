/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaults = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    defaults,
    extend: {
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
      },
      colors: {
        primary: colors.gray,
        accent: colors.red,
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['azeret-mono', 'monospace'],
      },
    },
  },
};
