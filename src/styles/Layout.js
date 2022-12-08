import { CssBaseline, Box } from "@mui/material";
// import image from "../assets/image.jpg";

export const Layout = ({ children }) => {
  return (
    <CssBaseline>
      <Box sx={{ bgcolor: "white", width: "100vw", height: "100vh" }}>
        {children}
      </Box>
    </CssBaseline>
  );
};
