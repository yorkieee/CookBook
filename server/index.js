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

const whitelist = ["https://cookbook-yorkieee.vercel.app"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

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

export default app;
