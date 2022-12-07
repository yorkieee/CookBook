import { Typography } from "@mui/material";

export const CommentsSection = ({ recipeComments }: any) => {
  if (recipeComments.length === 0) return null;

  const style = {
    color: "black",
    font: "Helvetica",
    fontWeight: "bold",
  };

  return (
    <div>
      <Typography style={style}>{"All Commments: "}</Typography>
      {recipeComments.map((comment: any) => (
        // <p>{comment.authorId}</p>
        <p>{comment.comment}</p>
      ))}
    </div>
  );
};
