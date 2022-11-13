import express from "express";
import userRoutes from "./routes/userRoutes.js";

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

app.use("/users", userRoutes);

// define the port of our server
app.listen(5001, () => {
  console.log("Sever is now listening at port 5001");
});

export default app;
