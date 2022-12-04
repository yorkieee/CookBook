import { useGetUserRecipes } from "../hooks/useGetUserRecipes";
import { RecipeCard } from "../styles/RecipeCard";

export const UsersRecipe = () => {
  const recipes = useGetUserRecipes();

  return (
    <div>
      {recipes.map((recipe, id) => (
        <h1 key={id}>{recipe.title}</h1>
      ))}
    </div>
  );
};
