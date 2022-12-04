import pool from "../dbConfig.js";

const getCommentsByRecipeId = async (recipeID) => {
  const data = await pool.query(
    "SELECT * FROM comments WHERE for_recipe_uid = $1",
    [recipeID]
  );

  const comments = data.rows;
  console.log("data", comments);

  return comments;
};

export const getComments = async (req, res) => {
  const recipeId = req.query.recipeid;
  try {
    const comments = await getCommentsByRecipeId(recipeId);

    res.json(comments);
  } catch (err) {
    console.log(err.message);
  }
};
