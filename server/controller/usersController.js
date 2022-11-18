import { pool } from "../dbConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await pool.query("SELECT * FROM users");
    res.json(getAllUsers.rows);
    console.log(getAllUsers);
  } catch (err) {
    console.log(err.msg);
  }
};

//get a user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const user = await pool.query(`SELECT * FROM users WHERE id = $1;`, [id]);
    console.log(user);
    res.status(200).json({
      user: user.rows[0],
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
};

//register a user

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = await pool.query("SELECT * FROM users WHERE email= $1;", [
      email,
    ]); //Checking if email already exists
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already exists, log in with your password.",
        success: false,
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(err).json({
            error: "Error encrypting password",
            success: false,
          });
        const user = {
          name,
          email,
          password: hash,
        };

        pool.query(
          `INSERT INTO users (name, email, password) VALUES ($1,$2,$3);`,
          [user.name, user.email, user.password],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: "Database error",
                success: false,
              });
            } else {
              const token = jwt.sign(
                //Signing a jwt token
                {
                  email: user.email,
                },
                process.env.SECRET_KEY
              );
              res.status(200).send({
                success: true,
                name: user.name,
                jwt: token,
              });
            }
          }
        );
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registering user!", //Database connection error
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await pool.query("SELECT * FROM users WHERE email= $1;", [
      email,
    ]);
    const user = data.rows;
    if (user.length === 0) {
      return res.status(400).json({
        error: "User is not registered. Sign up first",
        success: false,
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          //Checking if credentials match
          const token = jwt.sign(
            {
              email: email,
            },
            process.env.SECRET_KEY
          );
          res.status(200).json({
            success: true,
            name: user.name,

            token: token,
          });
        } else {
          //Declaring the errors
          if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
              success: false,
            });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while signing in!",
      success: false,
    });
  }
};
