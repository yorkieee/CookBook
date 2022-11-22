import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      light: "#ffcc80",
      main: "#f57c00",
      dark: "#e65100",
    },
    success: {
      light: "#a5d6a7",
      main: "#4caf50",
      dark: "#d50000",
    },
  },
});

export default theme;
