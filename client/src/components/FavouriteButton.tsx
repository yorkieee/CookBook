import { useFavouritesHandlers } from "../hooks/useFavouritesHandlers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

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
    <IconButton onClick={handleLike}>
      {isLiked ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
};
