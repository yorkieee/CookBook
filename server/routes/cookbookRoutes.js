import express from "express";
import { pool } from "../dbConfig.js";

const router = express.Router();

// GET route to query users table using raw SQL and node
router.get("/all", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM cookbook");
    console.log("response");

    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
