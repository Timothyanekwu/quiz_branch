import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
	colors: {
		primary: {
			100: "#9D75F7",
		},
		shades: {
			lightPurple: "#1212121A",
            200: '#E6E6E6'
		},
		secondary: {
			100: "#FFC42A",
		},
		dark: {
			100: "#121212",
			200: "#636363",
            300: '#656565'
		},
        light:{
            100: '#FFF',
            200: '#F4F4F4'
        },
		darkMode: {
			primary: "#1c1d1d",
			200: "#1f1e22",
			secondary: "#2c2f32",
		},
		accents: {
			elegantGold: "#d4af37",
			royalBlue: "#00ff3f",
			midnightGreen: "#004953",
		},
		status: {
			error: "#F00",
			warning: "",
			info: "",
		},
		defaults: {
			primarySide: "#1d1e22", //primary color for dashboard sidebar
			default: "#17181c", //dashboard primary color for the body
			select: "#24252b", // default Selectection color
			pops: "#2b2c33", // pops color for dashboard icons and others
			primaryText: "hsla(0,0%,100%,.5)",
			whiteText: "#ffffff",
		},
		muted: {
			default: "#F0F0F0",
		},
	},
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	breakpoints: {
		base: "0px",
		sm: "320px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
		"4xl": "2350px",
	},
});

export function getHexColor(color: string, shade: string) {
	const colors = chakraTheme.colors[color];
	if (!shade) return colors;
	return colors ? colors[shade] : color;
}
