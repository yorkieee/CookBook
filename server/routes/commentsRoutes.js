import { addComment } from "../controller/commentsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/addcomment", authMiddleware, addComment);

export default router;
