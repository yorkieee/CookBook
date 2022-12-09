import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#B8D3FF",
      main: "#92B4EC",
      dark: "#5471A1",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#FFE69A",
      dark: "#FFD24C",
    },
  },
  themeShadow: {
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  },
});

export default theme;
