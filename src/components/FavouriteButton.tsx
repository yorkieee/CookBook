import { Button } from "@mui/material";
import { useFavouritesHandlers } from "../hooks/useFavouritesHandlers";

export const FavouriteButton = ({ isLiked, recipeId, setIsFetched }: any) => {
  const { postFavourite, deleteFavourite } = useFavouritesHandlers(recipeId);

  const handleLike = (e: any) => {
    e.preventDefault();

    if (isLiked) {
      deleteFavourite();
      setIsFetched(false);
    } else {
      postFavourite();
      setIsFetched(false);
    }
  };

  return (
    <Button
      sx={{ bakgroundColor: isLiked ? "geen" : "white" }}
      onClick={handleLike}
    >
      {isLiked ? "LIKED" : "UNLIKED"}
    </Button>
  );
};
