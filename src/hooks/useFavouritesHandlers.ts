import { deleteFavourite } from "../backend-requests/deleteFavourite";
import { postFavourite } from "../backend-requests/postFavourite";
import { useUserId } from "./useUserId";

export const useFavouritesHandlers = (recipeId: string) => {
  const userId = useUserId();

  const postFavouriteFunction = () => {
    postFavourite(recipeId, userId);
  };

  const deleteFavouriteFunction = () => {
    deleteFavourite(recipeId, userId);
  };

  return {
    postFavourite: postFavouriteFunction,
    deleteFavourite: deleteFavouriteFunction,
  };
};
