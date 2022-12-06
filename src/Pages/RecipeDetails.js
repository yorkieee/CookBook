import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const backendUrl = "http://localhost:5001";

const useGetRecipeById = () => {
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
  // getRecipes();

  useEffect(() => {
    const fetch = async () => {
      const fetchedRecipes = await getRecipes();
      setRecipes(fetchedRecipes);
    };
    fetch();
  }, []);

  return recipes;
};

export const RecipeDetails = () => {
  const recipe = useGetRecipeById()[0];

  if (!recipe) return <h1>{"...loading"}</h1>;

  const { title, ingredients, description } = recipe;

  return (
    <div>
      <p>{title}</p>
      <p>{ingredients}</p>
      <p>{description}</p>
    </div>
  );
};
