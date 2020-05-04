import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		background: {
			default: "#2C3544",
		},
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#fdd835",
		},
	},
});

export const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		background: {
			default: "#E2E2E2",
		},
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#fdd835",
		},
	},
});
