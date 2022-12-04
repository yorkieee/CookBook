import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
import { addComment, getComments } from "../controller/commentsController.js";

const router = express.Router();

router.post("/addcomment", authMiddleware, addComment);
router.get("/getcomments", getComments);

export default router;
