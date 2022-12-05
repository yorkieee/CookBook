import express from "express";
import cookbookRoutes from "./routes/cookbookRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import favouritesRoutes from "./routes/favouritesRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import cors from "cors";
import { passportConfig } from "./middleware/passport.js";
import passport from "passport";
import * as dotenv from "dotenv";
import { dbGetUserNameByUid } from "./db-utils/dbGetUserNameByUid.js";
import pool from "./dbConfig.js";

dotenv.config();

// create express  app
const app = express();

// instantiate router feature and add it to the express app
const router = express.Router();
app.use(router);
app.use(cors()); //allowing backend to communicate with frontend
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.initialize());
passportConfig(passport);

//define the port of our server
app.listen(5001, () => {
  console.log("Sever is now listening at port 5001");
});

app.use("", cookbookRoutes);
app.use("", usersRoutes);
app.use("", commentsRoutes);
app.use("", favouritesRoutes);

// const getFavouritesByUid = async (uid) => {
//   const user = await dbGetUserNameByUid(uid);
//   const data = await pool.query(
//     "SELECT recipe_id, title, description, ingredients, description,  favourites.id, favourites.author_name FROM recipes, favourites WHERE (recipes.uid = favourites.for_recipe_uid) AND (favourites.author_name = $1)"[
//       user
//     ]
//   );
//   const favourites = data.rows;
//   console.log("response", favourites);

// return favourites;
// };
// getFavouritesByUid();
export default app;
