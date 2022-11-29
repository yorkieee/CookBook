import React, { FormEvent, useState } from "react";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const backendUrl = "http://localhost:5001";

export const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // const navigate = useNavigate();

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const body = { title, description, ingredients, instructions };
      const response = await fetch(`${backendUrl}/newrecipe`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // if (success) {
  //   navigate("/recipes");

  return (
    <React.Fragment>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ backgroundColor: "white", borderRadius: 5 }}
      >
        <h1>Add your recipe</h1>
        <form onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="title"></label>
              <TextField
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                required
                fullWidth
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="description"></label>
              <TextField
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                multiline
                required
                fullWidth
                value={description}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="ingredients"></label>
              <TextField
                onChange={(e) => setIngredients(e.target.value)}
                label="Ingredients"
                type="text"
                required
                fullWidth
                value={ingredients}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="instructions"></label>
              <TextField
                onChange={(e) => setInstructions(e.target.value)}
                label="Instructions"
                type="text"
                required
                fullWidth
                value={instructions}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                type="submit"
                onSubmit={onSubmitForm}
              >
                Add a recipe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <br></br>
    </React.Fragment>
  );
};
