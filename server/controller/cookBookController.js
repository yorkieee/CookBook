import { dbGetUserNameByUid } from "../db-utils/dbGetUserNameByUid.js";
import { getAllRecipesByUid } from "../db-utils/getAllRecipesByUid.js";
import pool from "../dbConfig.js";

export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await pool.query("SELECT * FROM recipes");
    res.json(allRecipes.rows);
  } catch (err) {
    console.log(err.msg);
  }
};

export const postARecipe = async (req, res) => {
  const { title, ingredients, description, instructions, authorUid } = req.body;

  const authorName = await dbGetUserNameByUid(authorUid);

  try {
    const query = await pool.query(
      "INSERT INTO recipes (title, ingredients, description, instructions, author_name) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, ingredients, description, instructions, authorName]
    );

    res.json(query.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUsersRecipe = async (req, res) => {
  console.log(req.query.id);
  const uid = req.query.id;
  try {
    const usersRecipes = await getAllRecipesByUid(uid);
    console.log(usersRecipes);

    res.json(usersRecipes);
  } catch (err) {
    console.log(err.message);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const changeRecipe = await pool.query(
      `UPDATE recipes SET title=$1, ingredients=$2, description=$3, instructions=$4
       WHERE id=$5 RETURNING *`
      // [...values, id]
    );
    res.json(changeRecipe.rows);
  } catch (err) {
    console.log(err.message);
  }
};

// export const updateMyPost = async (req, res) => {
//   console.log("req.user", req.user);
//   const postid = req.params.id;
//   const uid = req.user.id;
//   const { title, description, price, postcode, postimage } = req.body;
//   pool.query(
//     `UPDATE user_posts SET title = $1, description = $2, price = $3, postcode = $4, postimage = $5 WHERE postid = $6 and usersid = $7;`,
//     [title, description, price, postcode, postimage, postid, uid],
//     (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({
//           error: "Database update my post error",
//           success: false,
//         });
//       } else {
//         res.status(200).send({
//           success: true,
//         });
//       }
//     }
//   );
// };

//delete a recipe

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuery = await pool.query(
      `DELETE FROM recipes WHERE recipe_id =$1`,
      [id]
    );
    res.json(deleteQuery.rows);
  } catch (err) {
    console.log(err.msg);
  }
};
