import express from "express";
import {
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
  getProfile,
} from "../controller/usersController.js";
import validInfo from "../middleware/validinfo.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/signup", registerUser);
router.post("/login", validInfo, loginUser);
router.get("/profile", authMiddleware, getProfile);

export default router;
