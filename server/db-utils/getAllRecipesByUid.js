import pool from "../dbConfig.js";
import { dbGetUserNameByUid } from "./dbGetUserNameByUid.js";

export const getAllRecipesByUid = async (uid) => {
  const authorName = await dbGetUserNameByUid(uid);
  const dbResponse = await pool.query(
    `SELECT * FROM recipes WHERE author_name = $1`,
    [authorName]
  );

  const allRecipes = dbResponse.rows;

  return allRecipes;
};
