import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Layout } from "../styles/Layout";

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

            backgroundColor: "white",
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
              background: "#37474f",
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
                color: "white",
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
              border: 2,
              width: "170px",
              height: "30px",
              color: "black",
              marginBottom: 15,
              borderRadius: 8,
              borderColor: "#37474f",
              padding: "0 30px",
            }}
          >
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#37474f",
                fontFamily: "Helvetica",
              }}
              to="/login"
            >
              Log in{" "}
            </Link>
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default LandingPage;
