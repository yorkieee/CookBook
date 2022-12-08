import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { SearchBar } from "../components/Search";
import { useHandleFavourites } from "../hooks/useHandleFavourites";
import { Layout } from "../styles/Layout";

export const UsersFavourites = () => {
  const { favourites } = useHandleFavourites();

  return (
    <Layout>
      <Container maxWidth="lg">
        <SearchBar />
        <Grid container spacing={2}>
          {favourites.map((recipe, id) => (
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

                  <Typography paragraph>Ingredients:</Typography>
                  <Typography paragraph>{recipe.ingredients}</Typography>
                  <Typography paragraph>How to cook:</Typography>
                  <Typography paragraph>{recipe.instructions}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
