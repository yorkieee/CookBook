import { useGetUserRecipes } from "../hooks/useGetUserRecipes";

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
