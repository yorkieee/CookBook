import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: "#EDF2FB",
      main: "#CCDBFD",
      dark: "#ABC4FF",
    },
    secondary: {
      light: "#E2EAFC",
      main: "#C1D3FE",
      dark: "#B6CCFE",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
};

export default theme;
