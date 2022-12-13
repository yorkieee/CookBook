import React, { FormEvent, useState, useContext } from "react";
import { TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Layout } from "../styles/Layout";

const Copyright = (props: any) => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`CookBook © ${currentYear}.`}
    </Typography>
  );
};

const backendUrl = "https://pern-pi.vercel.app";

export const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const { user } = useContext(AuthContext);
  const uid = user?.user.uid;

  const navigate = useNavigate();

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        title,
        description,
        ingredients,
        instructions,
        authorUid: uid,
        image,
      };
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
    navigate("/usersrecipe");
  };

  return (
    <Layout>
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
              <label htmlFor="image"></label>
              <TextField
                onChange={(e) => setImage(e.target.value)}
                label="Image url"
                multiline
                maxRows={2}
                required
                fullWidth
                value={image}
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
          <br></br>
          <Copyright />
        </form>
      </Container>
    </Layout>
  );
};
