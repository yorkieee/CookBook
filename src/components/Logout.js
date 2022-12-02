import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  console.log("success", logout);
  return <LogoutIcon onClick={logout}></LogoutIcon>;
};

// <Button contained color="secondary" onClick={logout}>
// Logout
// </Button>
