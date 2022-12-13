import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const backendUrl = "https://pern-pi.vercel.app";

export const useGetUserRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const { user } = useContext(AuthContext);
  const uid = user?.user.uid;

  const getRecipes = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "GET",
      };
      const data = await axios.get(
        `${backendUrl}/usersrecipe?id=${uid}`,
        options
      );
      if (data.data) {
        console.log("recipes", data.data);
        return data.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const fetchedRecipes = await getRecipes();
      setRecipes(fetchedRecipes);
    };
    fetch();
  }, []);

  return recipes;
};
