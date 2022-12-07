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

// <Box
//         className="image"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           // position: "fixed",
//         }}
//       >
//         {children}
//       </Box>

// <Box sx={{ bgcolor: "#37474f", width: "100vw", height: "100vh" }}>
