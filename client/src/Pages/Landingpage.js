import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Layout } from "../styles/Layout";
import image from "../assets/bg.jpg";

const LandingPage = () => {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 2,
            marginRight: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            mb: 4,
            mt: { sx: 4, sm: 10, lg: 3 },
          }}
        >
          <Typography
            color="#37474f"
            align="center"
            variant="h2"
            marked="center"
            fontFamily="Helvetica"
          >
            Eat Share Enjoy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              backgroundColor: "secondary",
              border: 0,
              width: "210px",
              height: "80px",
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
              }}
              to="/signup"
            >
              {"Get started"}
            </Link>
          </Button>
          <Button
            sx={{
              background: "white",
              border: 2,
              width: "210px",
              height: "80px",
              color: "black",
              marginBottom: 15,
              borderRadius: 8,
              borderColor: "#primary",
              padding: "0 30px",
            }}
          >
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#37474f",
              }}
              to="/login"
            >
              {"Log in"}
            </Link>
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default LandingPage;

// backgroundImage: `url(${image})`,
// backgroundRepeat: "no-repeat",
// backgroundSize: "100vh",
