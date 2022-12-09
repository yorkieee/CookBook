import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const CommentsSection = ({ recipeComments }: any) => {
  if (recipeComments.length === 0) return null;

  return (
    <Box>
      <Box>
        <Typography>{"Commments:"}</Typography>
      </Box>
      {recipeComments.map((comment: any) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // height: "56px",
            borderTopColor: "#dddddd",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            paddingTop: "12px",
            marginTop: "16px",
          }}
        >
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
          <Typography sx={{ marginTop: "12px", fontSize: 18 }}>
            {comment.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
