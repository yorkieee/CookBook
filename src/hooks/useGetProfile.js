import { useState, useEffect } from "react";
import axios from "axios";

// type User = {
//   success: boolean,
//   user: {
//     name: string,
//     email: string,
//   },
// };

// const [User, setUser] = (useState < user) | (null > initialAuth.user);

// const backendUrl = "http://localhost:5001";

// export const getProfile = async () => {
//   try {
//     const options = {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       },
//       method: "get",
//       params: { id: 1 },
//     };

//     const data = await axios.get(`${backendUrl}/profile`, options);

//     if (data.data) {
//       setUser(data.data);
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// useEffect(() => {
//   getProfile(user);
// }, []);
