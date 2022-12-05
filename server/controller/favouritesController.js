import pool from "../dbConfig.js";

export const addFavourite = async (req, res) => {
  const { user_id, recipe_id } = req.body;

  try {
    const favourites = await pool.query(
      "INSERT INTO favourites (user_id, for_recipe_uid) VALUES ($1,$2)",
      [user_id, recipe_id]
    );

    res.json(favourites.rows);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteFavourite = async (req, res) => {
  try {
    const { user_id, recipe_id } = req.body;

    await pool.query(
      `DELETE FROM favourites WHERE user_id = $1 AND for_recipe_uid=$2`,
      [user_id, recipe_id]
    );
    res.json("favourite was deleted!");
  } catch (err) {
    console.log(err.message);
  }
};

export const getFavouritesByUid = async (req, res) => {
  const uid = req.query.uid;
  try {
    const data = await pool.query(
      `SELECT recipe_id, title, description, ingredients, description, instructions, favourites.id, favourites.user_id FROM recipes, favourites WHERE (recipes.uid = favourites.for_recipe_uid) AND (favourites.user_id = $1)`,
      [uid]
    );
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
  }
};
