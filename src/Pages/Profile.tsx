import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Box, Button, Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Logout } from "../components/Logout";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log({ user });

  const navigate = useNavigate();

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
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <h1>{`Welcome ${user?.user.name}!`}</h1>
            <Grid item>
              <h1>{`Welcome ${user?.user.name}!`}</h1>
              <p>{`Your email is ${user?.user.email}`}</p>
              <Grid item>
                <p>
                  Add your favourite recipes and share them with other cook
                  enthusiasts!
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Button
        onClick={() => {
          navigate(`/newrecipe`);
        }}
      >
        Add a recipe
      </Button>

      <Logout />
    </Container>
  );
};
