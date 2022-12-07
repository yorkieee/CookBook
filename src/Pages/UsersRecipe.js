import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { SearchBar } from "../components/Search";
import { useGetUserRecipes } from "../hooks/useGetUserRecipes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UsersRecipe = () => {
  const recipes = useGetUserRecipes();

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <SearchBar />
      <Grid container spacing={4}>
        {recipes.map((recipe, id) => (
          <Grid item key={id} xs={12} md={3} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={recipe.title}
              />
              <CardMedia
                component="img"
                height="194"
                src={recipe.image}
                alt=""
              />
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// {recipes.map((recipe, id) => (
//   <h1 key={id}>{recipe.title}</h1>
// ))}
