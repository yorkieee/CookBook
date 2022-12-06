import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CssBaseline } from "@mui/material";
import { useGetRecipeComments } from "../hooks/useGetRecipeComments";
import CommentIcon from "@mui/icons-material/Comment";
import { CommentsAdd } from "../components/CommentsAdd";
import { CommentsSection } from "../components/CommentsSection";
import { useNavigate, useParams } from "react-router-dom";

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

export const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const recipeId = recipe.uid;

  const recipeComments = useGetRecipeComments(recipe.uid);

  return (
    <CssBaseline>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.title}
        />
        <CardMedia component="img" height="194" src={recipe.image} alt="" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CardActions>
              <FavoriteIcon></FavoriteIcon> <FavoriteBorderIcon />
            </CardActions>
          </IconButton>
          <IconButton
            aria-label=" add comment"
            onClick={() => {
              navigate(`/recipe/${recipeId}`);
            }}
          >
            <CommentIcon />
          </IconButton>
          <ExpandMore
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
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>{recipe.ingredients}</Typography>
            <Typography paragraph>How to cook:</Typography>
            <Typography paragraph>{recipe.instructions}</Typography>
          </CardContent>
        </Collapse>
        <CommentsAdd recipe={recipe} />
        <CommentsSection recipeComments={recipeComments} />
      </Card>
    </CssBaseline>
  );
};
