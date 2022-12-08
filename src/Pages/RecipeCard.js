import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

import { styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { FavouriteButton } from "../components/FavouriteButton";

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

export const RecipeCard = ({
  recipe,
  isLiked,
  isLikesFetched,
  setIsFetched,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const recipeId = recipe.uid;

  return (
    <CssBaseline>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={recipe.title} />
        <CardMedia component="img" height="194" src={recipe.image} alt="" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CardActions>
              {isLikesFetched && (
                <FavouriteButton
                  setIsFetched={setIsFetched}
                  isLiked={isLiked}
                  recipeId={recipeId}
                />
              )}
            </CardActions>
          </IconButton>
          <IconButton
            color="primary"
            aria-label=" add comment"
            onClick={() => {
              navigate(`/recipe/${recipeId}`);
            }}
          >
            <CommentIcon />
          </IconButton>
          <ExpandMore
            color="secondary"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>Ingredients:</Typography>
            <Typography paragraph>{recipe.ingredients}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>How to cook:</Typography>
            <Typography paragraph>{recipe.instructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CssBaseline>
  );
};
