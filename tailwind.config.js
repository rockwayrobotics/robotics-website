/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaults = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		defaults,
		extend: {
			gridTemplateColumns: {
				3: "repeat(3, minmax(0, 1fr))",
			},
			colors: {
				primary: colors.gray,
				accent: colors.red,
			},
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
				mono: ["azeret-mono", "monospace"],
			},
		},
	},
};
