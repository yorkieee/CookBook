import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
import {
  addFavourite,
  getFavourites,
} from "../controller/favouritesController.js";

const router = express.Router();

router.post("/addfavourites", addFavourite);
router.get("/favourites", getFavourites);

export default router;
