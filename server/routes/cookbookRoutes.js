import express from "express";
import {
  postARecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
  getUsersRecipe,
  getRecipeById,
} from "../controller/cookBookController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/recipes", getAllRecipes);

router.post("/newrecipe", postARecipe);
router.get("/recipes", getAllRecipes);
router.get("/usersrecipe", authMiddleware, getUsersRecipe);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);
router.get("/recipes/:id", getRecipeById);

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
