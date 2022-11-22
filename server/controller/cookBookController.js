import pool from "../dbConfig.js";

// get all recipes

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await pool.query("SELECT * FROM recipes");
    res.json(allRecipes.rows);
    console.log(allRecipes);
    // res.json(allRecipes.rows);
  } catch (err) {
    console.log(err.msg);
  }
};

//create a recipe

export const createARecipe = async (req, res) => {
  try {
    const { title } = req.body;
    const { ingredients } = req.body;
    const { description } = req.body;
    const newRecipe = await pool.query(
      "INSERT INTO recipes (title) VALUES($1) RETURNING *",
      [title]
    )("INSERT INTO recipes (ingredients) VALUES($1) RETURNING *", [
      ingredients,
    ])("INSERT INTO recipes (description) VALUES($1) RETURNING *", [
      description,
    ]);
    res.json(newRecipe);
  } catch (err) {
    console.log(err.msg);
  }
};

//get a recipe

export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await pool.query(
      "SELECT * FROM recipes WHERE recipe_id = $1",
      [id]
    );
    res.json(recipes.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

//update a recipe

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updateRecipe = await pool.query(
      "UPDATE recipes SET title = $1 WHERE recipe_id = $2",
      [title, id]
    );
    res.json("Recipe was updated");
  } catch (err) {
    console.log(err.message);
  }
};

//delete a recipe

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRecipe = await pool.query(
      "DELETE FROM recipes WHERE recipe_id =$1",
      [id]
    );
    res.json("Recipe was deletd!");
  } catch (err) {
    console.log(err.msg);
  }
};
