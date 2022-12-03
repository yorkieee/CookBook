import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Box, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Logout } from "../components/Logout";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { UpdateProfile } from "../components/UpdateUserName";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

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

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <UpdateProfile />
        {/* <Avatar sx={{ width: 24, height: 24 }}>A</Avatar> */}
        <Logout />
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <p>{`Welcome ${user?.user.name}!`}</p>
        <p>{`Your email is ${user?.user.email}`}</p>
      </Box>

      <p>
        Add your favourite recipes and share them with other cook enthusiasts!
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          onClick={() => {
            navigate(`/newrecipe`);
          }}
        >
          Add a recipe
        </Button>
        <Button
          onClick={() => {
            navigate(`/usersrecipe`);
          }}
        >
          {" "}
          My recipes{" "}
        </Button>
        <Button
          onClick={() => {
            navigate(`/newrecipe`);
          }}
        >
          {" "}
          My <FavoriteIcon />{" "}
        </Button>
      </Box>
    </Container>
  );
};
