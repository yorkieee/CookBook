import express from "express";
import {
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
  getUserProfile,
  updateUsername,
} from "../controller/usersController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import validInfo from "../middleware/validInfo.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/signup", validInfo, registerUser);
router.post("/login", validInfo, loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/updateUsername", authMiddleware, updateUsername);

export default router;
