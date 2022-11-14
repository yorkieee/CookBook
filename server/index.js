import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { pool } from "./dbConfig.js";

// create express  app
const app = express();
// instantiate router feature and add it to the express app
const router = express.Router();
app.use(router);
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// write first GET route for testing
router.get("/test", (req, res) => {
  res.send({ msg: "Test route is working!" });
});

// GET route to query users table using with Sequelize
app.get("/rawquery", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");

    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
});

app.use("/users", userRoutes);

//define the port of our server
app.listen(5001, () => {
  console.log("Sever is now listening at port 5001");
});

export default app;

// const eraseDatabaseOnSync = true;

// sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
//   app.listen(5000, () => console.log(`Sever is now listening at port 5001"`));
// });
// //using the routes for a specific api
// app.use("/api/users", userRoutes);
// export default app;
