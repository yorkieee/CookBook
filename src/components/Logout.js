import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClick = () => {
    logout();
    navigate("/");
  };

  return <LogoutIcon cursor={"pointer"} onClick={onClick}></LogoutIcon>;
};
