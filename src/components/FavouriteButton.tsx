import { Button } from "@mui/material";

export const FavouriteButton = ({ isLiked }: any) => {
  const handleLike = (e: any) => {
    e.preventDefault();
    console.log("cliked on like!");
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
