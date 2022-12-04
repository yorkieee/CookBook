import pool from "../dbConfig.js";
import { dbGetUserNameByUid } from "../db-utils/dbGetUserNameByUid.js";

const getCommentsByRecipeId = async (recipeID) => {
  const data = await pool.query(
    "SELECT * FROM comments WHERE for_recipe_uid = $1",
    [recipeID]
  );

  const comments = data.rows;

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

export const addComment = async (req, res) => {
  const { comment, author_uid, recipe_id } = req.body;

  try {
    const author_name = await dbGetUserNameByUid(author_uid);

    const data = await pool.query(
      "INSERT INTO comments (comment, author_name, for_recipe_uid) VALUES ($1,$2,$3)",
      [comment, author_name, recipe_id]
    );

    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
  }
};
