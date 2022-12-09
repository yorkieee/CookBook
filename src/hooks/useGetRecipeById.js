import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const backendUrl = "https://cookbook-ochre-six.vercel.app";

export const useGetRecipeById = () => {
  const [recipes, setRecipes] = useState([]);

  const { recipeId } = useParams();

  const getRecipes = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "GET",
      };
      const data = await axios.get(
        `${backendUrl}/recipe/?id=${recipeId}`,
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
