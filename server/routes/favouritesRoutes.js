import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
import {
  addFavourite,
  deleteFavourite,
  getFavouritesByUid,
} from "../controller/favouritesController.js";

const router = express.Router();

router.post("/addfavourites", authMiddleware, addFavourite);
router.get("/favourites", authMiddleware, getFavouritesByUid);
router.delete("/deletefavourite", deleteFavourite);

export default router;
