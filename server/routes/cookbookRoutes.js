import express from "express";
import {
  createARecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controller/cookBookController.js";

const router = express.Router();

router.get("/recipes", getAllRecipes);

router.post("/recipes", createARecipe);
router.get("/recipes", getAllRecipes);
router.get("/recipes/:id", getRecipeById);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/id", deleteRecipe);

export default router;

// // GET route to query users table using raw SQL and node
// router.get("/all", async (req, res) => {
//   try {
//     const response = await pool.query("SELECT * FROM cookbook");
//     console.log("response");

//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// });
