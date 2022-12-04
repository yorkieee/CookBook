import React from "react";
import { Container } from "@mui/system";
import { RecipeCard } from "../styles/RecipeCard";
import { Grid } from "@mui/material";
import { Layout } from "../styles/Layout";

interface ListRecipesProps {
  recipeData: Array<string>;
}

const ListRecipes: React.FC<ListRecipesProps> = ({ recipeData }) => {
  return (
    <Layout>
      <Container>
        <h1> CookBook Recipes </h1>
        <Grid container spacing={4}>
          {recipeData.map((recipe, id) => (
            <Grid item key={id} xs={12} md={3} lg={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default ListRecipes;
