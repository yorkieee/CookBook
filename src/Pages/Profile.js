import { useState, useEffect } from "react";
import axios from "axios";

// interface Profile {
//     avatar: string
//     username: string
//     name: string
//     email: string
// }

export const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const backendUrl = "http://localhost:5000";
        const options = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          method: "GET",
        };
        const data = await axios.get(`${backendUrl}/users/2`, options);
        if (data.data) {
          console.log("getProfile", data.data);
          setProfile(data.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      <h2>User</h2>
      <div>
        {profile &&
          profile.map((user) => {
            return <p key={user.email}>{user.name}</p>;
          })}
      </div>
    </div>
  );
};
