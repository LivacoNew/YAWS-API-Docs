module.exports = {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{vue,js}"
	],
	theme: {
		extend: {},
		colors: {
			yaws: "#4dd8b3",
			sidebar: {
				light: {
					bg: "#FFFFFF",
				},
				dark: {
					bg: "#232323"
				}
			},
			text: {
				light: {
					main: "#4b4b4b",
					copyright: "#bfbfbf",
				},
				dark: {
					main: "#dcdcdc",
					copyright: "#707070",
				}
			},
			warning: {
				light: {
					bg: "#edb25a",
					border: "#d9932b",
				},
				dark: {
					bg: "#523813",
					border: "#d9932b",
				}
			},

			light: {
				bg: "#FFFFFF",
				theme: "#698a76",
				highlight: "#498c64",
			},
			dark: {
				bg: "#151515",
				theme: "#a3cfb5",
				highlight: "#43b597",
			}
		}
	},
	plugins: [],
}
