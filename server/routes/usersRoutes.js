import express from "express";
import {
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
} from "../controller/usersController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/signup", registerUser);
router.post("/login", loginUser);
export default router;
