/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
    "!./node_modules/**/*"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        main: "#121212"
      },
			fontFamily: {
				poly: ['"poly"', "serif"],
			},
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}

