import express from "express";
import cookbookRoutes from "./routes/cookbookRoutes.js";
import { pool } from "./dbConfig.js";
import cors from "cors";

// create express  app
const app = express();

// instantiate router feature and add it to the express app
const router = express.Router();
app.use(router);
app.use(cors());
app.use(express.json());

// write first GET route for testing
router.get("/test", (req, res) => {
  res.send({ msg: "Test route is working!" });
});

// GET route to query users table using with Sequelize
// app.get("/rawquery", async (req, res) => {
//   try {
//     const response = await pool.query("SELECT * FROM recipes");

//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.use("/cookbook", cookbookRoutes);

//create a recipe

app.post("/recipes", async (req, res) => {
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
});

// get all recipes

app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await pool.query("SELECT * FROM recipes");
    res.json(allRecipes.rows);
  } catch (err) {
    console.log(err.msg);
  }
});

//get a recipe

app.get("/recipes/:id", async (req, res) => {
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
});

//update a recipe

app.put("/recipes/:id", async (req, res) => {
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
});

//delete a recipe

app.delete("/recipes/id", async (req, res) => {
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
});

//define the port of our server
app.listen(5001, () => {
  console.log("Sever is now listening at port 5001");
});

export default app;
