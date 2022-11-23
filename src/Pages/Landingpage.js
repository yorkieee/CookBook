import React from "react";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container component="main">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: 500,
          height: 300,
          backgroundColor: "none",
          "&:hover": {},
          mb: 4,
          mt: { sx: 4, sm: 10, lg: 3 },
        }}
      >
        <Typography color="white" align="center" variant="h2" marked="center">
          Eat Share Enjoy
        </Typography>
        <Typography
          color="white"
          align="center"
          variant="h6"
          sx={{ mb: 4, mt: { sx: 4, sm: 12, lg: 3 } }}
        >
          Share your favourite recipes, try new ones, enjoy your CookBook
        </Typography>
        <Button
          sx={{
            background: "linear-gradient(45deg, #cfd8dc , #90a4ae)",
            border: 0,
            width: "180px",
            height: "90px",
            color: "black",
            marginBottom: 15,
            borderRadius: 8,
            padding: "0 30px",
          }}
          variant="contained"
          align="center"
          position="center"
        >
          <Link style={{ textDecoration: "none" }} to="/signup">
            Get started{" "}
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
