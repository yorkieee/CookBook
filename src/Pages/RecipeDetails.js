import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { CommentsSection } from "../components/CommentsSection";
import { CommentsAdd } from "../components/CommentsAdd";

import { useGetRecipeById } from "../hooks/useGetRecipeById";

import CommentIcon from "@mui/icons-material/Comment";

import { useGetRecipeComments } from "../hooks/useGetRecipeComments";

export const RecipeDetails = () => {
  const recipe = useGetRecipeById()[0];
  const { recipeId } = useParams();
  const recipeComments = useGetRecipeComments(recipeId);

  if (!recipe) return <h1>{"...loading"}</h1>;

  const { title, ingredients, instructions } = recipe;

  return (
    <CssBaseline>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          backgroundColor: "none",

          mb: 4,
          mt: { sx: 4, sm: 10, lg: 2 },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title={title} />
          <CardMedia component="img" height="154" src={recipe.image} alt="" />

          <Typography sx={{ fontWeight: "bold" }}>Ingredients:</Typography>
          <Typography paragraph>{ingredients}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>How to cook:</Typography>
          <Typography paragraph>{instructions}</Typography>

          <CardContent>
            <CommentsAdd recipe={recipe} />
            <CommentsSection recipeComments={recipeComments} />
          </CardContent>
        </Card>
      </Box>
    </CssBaseline>
  );
};
