import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Box, Button, Typography } from "@mui/material";
import { Logout } from "../components/Logout";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Layout } from "../styles/Layout";

const ButtonBox = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    borderColor: "primary",
    border: "2px solid",
    backgroundColor: "white",
    cursor: "pointer",
    minWidth: "100px",
    height: { xs: "48px", sm: "40px" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        height: { xs: "160px", sm: "auto" },
      }}
    >
      <Button
        sx={buttonStyle}
        onClick={() => {
          navigate(`/newrecipe`);
        }}
      >
        {"Add a recipe"}
      </Button>
      <Button
        sx={buttonStyle}
        onClick={() => {
          navigate(`/usersrecipe`);
        }}
      >
        {"My recipes"}
      </Button>
      <Button
        sx={buttonStyle}
        onClick={() => {
          navigate(`/favourites`);
        }}
      >
        {"My Favourites"}
      </Button>
    </Box>
  );
};

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <Layout>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "64px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid black",
          height: { xs: "400px", sm: "250px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <UpdateProfile /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Avatar sx={{ width: 22, height: 22 }} />
            <Typography
              sx={{ fontFamily: "Helvetica" }}
            >{`Welcome ${user?.user.name}!`}</Typography>
            {/* <p>{`Your email is ${user?.user.email}`}</p> */}
          </Box>
          <Logout />
        </Box>

        <Typography sx={{ fontFamily: "Helvetica", font: 12 }}>
          Add your favourite recipes and share them with other cook enthusiasts!
        </Typography>
        <ButtonBox />
      </Container>
    </Layout>
  );
};
