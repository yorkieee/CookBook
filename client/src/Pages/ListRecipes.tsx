import React from "react";
import { Container } from "@mui/system";
import { RecipeCard } from "../components/RecipeCard";
import { Grid } from "@mui/material";
import { SearchBar } from "../components/Search";
import { useHandleFavourites } from "../hooks/useHandleFavourites";
import { Layout } from "../styles/Layout";

const ListRecipes: React.FC<any> = ({ recipeData }) => {
  const { favourites, isFetched, setIsFetched } = useHandleFavourites();

  return (
    <Layout>
      <Container maxWidth="lg">
        <SearchBar />
        <Grid container spacing={2}>
          {recipeData.map((recipe: any, id: number) => {
            const recipeId = recipe.uid;

            const match = favourites.find(({ uid }: any) => {
              return uid === recipeId;
            });

            const isLiked = !!match;

            return (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <RecipeCard
                  isLikesFetched={isFetched}
                  setIsFetched={setIsFetched}
                  isLiked={isLiked}
                  recipe={recipe}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default ListRecipes;
