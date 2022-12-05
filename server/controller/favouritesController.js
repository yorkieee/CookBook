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

// const getFavouritesByUid = async (uid) => {
//   const user = await dbGetUserNameByUid(uid);
//   const data = await pool.query(
//     "SELECT recipe_id, title, description, ingredients, description,  favourites.id, favourites.author_name FROM recipes, favourites WHERE (recipes.uid = favourites.for_recipe_uid) AND (favourites.author_name = $1)"[
//       user
//     ]
//   );
//   const favourites = data.rows;
//   console.log("response", data.rows);

//   return favourites;
// };

// export const getFavourites = async (req, res) => {
//   const uid = req.body.uid;
//   try {
//     const recipes = await getFavouritesByUid(uid);

//     res.json(recipes);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const getFavouritesByUid = async (req, res) => {
  const uid = req.query.uid;
  try {
    const data = await pool.query(
      `SELECT recipe_id, title, description, ingredients, description, instructions, favourites.id, favourites.user_id FROM recipes, favourites WHERE (recipes.uid = favourites.for_recipe_uid) AND (favourites.user_id = $1)`,
      [uid]
      // "SELECT * FROM favourites WHERE uid = $1, SELECT * FROM recipes WHERE recipe_id = $2",
      // [uid, recipe_id]
    );
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
  }
};
