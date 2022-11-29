import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log({ user });
  return (
    <div className="profileCard">
      <h1>{`Hey ${user?.user.name}`}</h1>
      <div>{`Your email is ${user?.user.email}`}</div>
    </div>
  );
};
