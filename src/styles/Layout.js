import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <Box sx={{}}>
      <Navbar />
      {children}
    </Box>
  );
};
