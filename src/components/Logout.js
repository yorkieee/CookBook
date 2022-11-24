import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  console.log("success", logout);
  return <button onClick={logout}>Logout</button>;
};
