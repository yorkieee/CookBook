import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        backgroundColor: "none",

        mb: 4,
        mt: { sx: 4, sm: 10, lg: 3 },
      }}
    >
      <Typography
        color="white"
        align="center"
        variant="h2"
        marked="center"
        fontFamily="Helvetica"
      >
        Eat Share Enjoy
      </Typography>
      <Typography
        color="white"
        align="center"
        variant="h6"
        fontFamily="Helvetica"
        sx={{ mb: 4, mt: { sx: 4, sm: 12, lg: 3 } }}
      >
        Share your favourite recipes, try new ones, enjoy your CookBook
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          sx={{
            background: "white",
            border: 0,
            width: "170px",
            height: "30px",
            color: "black",
            marginBottom: 15,
            borderRadius: 8,
            padding: "0 30px",
          }}
          variant="contained"
          align="center"
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Helvetica",
            }}
            to="/signup"
          >
            Get started{" "}
          </Link>
        </Button>
        <Button
          sx={{
            background: "white",
            border: 0,
            width: "170px",
            height: "30px",
            color: "black",
            marginBottom: 15,
            borderRadius: 8,
            padding: "0 30px",
          }}
        >
          {" "}
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Helvetica",
            }}
            to="/login"
          >
            Log in{" "}
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
