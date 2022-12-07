import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  CssBaseline,
  IconButton,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { CommentsSection } from "../components/CommentsSection";

import { CommentsAdd } from "../components/CommentsAdd";

import { useGetRecipeById } from "../hooks/useGetRecipeById";

import { useGetRecipeComments } from "../hooks/useGetRecipeComments";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const RecipeDetails = () => {
  const recipe = useGetRecipeById()[0];

  const { recipeId } = useParams();

  const recipeComments = useGetRecipeComments(recipeId);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!recipe) return <h1>{"...loading"}</h1>;

  const { title, ingredients, instructions } = recipe;

  return (
    <CssBaseline>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 8,
          marginLeft: 2,
          marginRight: 2,
          display: "flex",
          justifyConten: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <CardHeader title={title} />
          <CardMedia component="img" height="154" src={recipe.image} alt="" />

          <CommentsAdd recipe={recipe} />
          <CommentsSection recipeComments={recipeComments} />
        </CardContent>
      </Card>
      <Card>
        <CardActions disableSpacing>
          <ExpandMore
            color="secondary"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon
              aria-label="show more"
              sx={{
                display: "flex",
                justifyConten: "center",
                alignItems: "center",
              }}
            />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>Ingredients:</Typography>
            <Typography paragraph>{ingredients}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>How to cook:</Typography>
            <Typography paragraph>{instructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CssBaseline>
  );
};
