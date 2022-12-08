import axios from "axios";
import { useEffect, useState } from "react";
import { useUserId } from "./useUserId";

const backendUrl = "http://localhost:5001";

export const useGetFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  const uid = useUserId();

  const getFavourites = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "GET",
      };
      const data = await axios.get(
        `${backendUrl}/favourites?uid=${uid}`,
        options
      );
      if (data.data) {
        return data.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const fetchedRecipes = await getFavourites();
      setFavourites(fetchedRecipes);
    };
    fetch();
  }, []);

  return favourites;
};
