import React, { useState } from "react";
import { Container } from "@mui/system";
import { RecipeCard } from "../Pages/RecipeCard";
import { Grid } from "@mui/material";
import { Layout } from "../styles/Layout";
import { SearchBar } from "../components/Search";
import { useHandleFavourites } from "../hooks/useHandleFavourites";

const ListRecipes: React.FC<any> = ({ recipeData }) => {
  const { favourites, isFetched, setIsFetched } = useHandleFavourites();

  return (
    <Layout>
      <Container>
        <SearchBar />
        <Grid container spacing={4}>
          {recipeData.map((recipe: any, id: string) => {
            const recipeId = recipe.uid;

            const match = favourites.find(({ uid }: any) => {
              return uid === recipeId;
            });

            const isLiked = !!match;

            return (
              <Grid item key={id} xs={12} md={3} lg={4}>
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
