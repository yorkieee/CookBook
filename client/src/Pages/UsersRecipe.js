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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { SearchBar } from "../components/Search";
import { useGetUserRecipes } from "../hooks/useGetUserRecipes";
import { useState } from "react";
import { Layout } from "../styles/Layout";

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

  return (
    <Layout>
      <Container>
        <SearchBar />
        <Grid container spacing={2}>
          {recipes.map((recipe, id) => (
            <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 400,
                  maxWidth: { sm: "345", md: "auto" },
                }}
              >
                <CardHeader title={recipe.title} />
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
                  <IconButton aria-label="add to favorites"></IconButton>

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
    </Layout>
  );
};
