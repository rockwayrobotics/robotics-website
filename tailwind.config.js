/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      // white: '#ffffff',
      primary: colors.gray,
      accent: colors.red,
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
};