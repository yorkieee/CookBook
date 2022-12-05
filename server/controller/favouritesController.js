import { dbGetUserNameByUid } from "../db-utils/dbGetUserNameByUid.js";
import pool from "../dbConfig.js";

export const addFavourite = async (req, res) => {
  const { author_uid, recipe_id } = req.body;

  try {
    const author_name = await dbGetUserNameByUid(author_uid);
    const favourites = await pool.query(
      "INSERT INTO favourites (author_name, for_recipe_uid) VALUES ($1,$2)",
      [author_name, recipe_id]
    );

    res.json(favourites.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const getFavouritesByUid = async (recipeID) => {
  const data = await pool.query(
    "SELECT * FROM favourites WHERE for_recipe_uid = $1",
    [recipeID]
  );

  const comments = data.rows;

  return comments;
};

export const getFavourites = async (req, res) => {
  const recipeId = req.query.recipeid;
  try {
    const comments = await getFavouritesByUid(recipeId);

    res.json(comments);
  } catch (err) {
    console.log(err.message);
  }
};

// export const getFavouritesByUid = async (req, res) => {
//   const uid = req.query.id;
//   const recipe_id = req.body;
//   try {
//     const data = await pool.query(
//       "SELECT * FROM favourites WHERE uid = $1, SELECT * FROM recipes WHERE recipe_id = $2",
//       [uid, recipe_id]
//     );
//     res.json(data.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
