import { useEffect } from "react";

export const useGetRecipes = (setList) => {
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5001/recipes");
        const recipeData = await response.json();
        setList(recipeData);
      } catch (err) {
        console.log(err.msg);
      }
    };
    getRecipes();
  }, []);
};
