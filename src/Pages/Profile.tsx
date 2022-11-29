import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log({ user });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ backgroundColor: "white", borderRadius: 5 }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
      <div className="profileCard">
        <h1>{`Welcome ${user?.user.name}`}</h1>
        <div>{`Your email is ${user?.user.email}`}</div>
        <Grid item>
          <h1>
            "Add your favourite recipes and share them with other cook
            enthusiasts!"
          </h1>
          <Link style={{ textDecoration: "none" }} to="/newrecipe">
            {" "}
            Add a recipe
          </Link>
        </Grid>
      </div>
    </Container>
  );
};
