import { useGetFavourites } from "../hooks/useGetFavourites";

export const UsersFavourites = () => {
  const favourites = useGetFavourites();

  return (
    <div>
      {favourites.map((recipe, id) => (
        <h1 key={id}>{recipe.title}</h1>
      ))}
    </div>
  );
};
