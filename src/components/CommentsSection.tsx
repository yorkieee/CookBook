import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const CommentsSection = ({ recipeComments }: any) => {
  if (recipeComments.length === 0) return null;

  const style = {
    color: "black",
    font: "Helvetica",
    fontWeight: "bold",
  };
  console.log(recipeComments);

  return (
    <div>
      <Typography style={style}>{"All Commments: "}</Typography>

      {recipeComments.map((comment: any) => (
        <div>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              gap: 2,
            }}
          >
            <Avatar sx={{ width: 22, height: 22 }} />
            <Typography sx={{ color: "secondary", fontSize: 16 }}>
              {comment.author_name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 12 }}>{comment.comment}</Typography>
        </div>
      ))}
    </div>
  );
};
