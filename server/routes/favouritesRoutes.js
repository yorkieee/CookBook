import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
import {
  addFavourite,
  getFavouritesByUid,
} from "../controller/favouritesController.js";

const router = express.Router();

router.post("/addfavourites", addFavourite);
router.get("/favourites", getFavouritesByUid);

export default router;
