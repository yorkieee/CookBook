import React from "react";
import { Typography } from "@mui/material";
import image from "../assets/image.jpg";
import CssBaseline from "@mui/material/CssBaseline";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <CssBaseline />
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Typography color="white" align="center" variant="h2" marked="center">
          Eat Share Enjoy
        </Typography>
        <Typography
          color="white"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10, lg: 3 } }}
        >
          Share your favourite recipes, try new ones, enjoy your CookBook
        </Typography>
      </div>
    </div>
  );
};

export default LandingPage;

// <button className="Register_button">Register</button>
