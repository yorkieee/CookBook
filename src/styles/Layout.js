import React from "react";
import { CssBaseline } from "@mui/material";
import image from "../assets/image.jpg";

export const Layout = ({ children }) => {
  return (
    <CssBaseline>
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
        {children}
      </div>
    </CssBaseline>
  );
};
