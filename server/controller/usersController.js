import pool from "../dbConfig.js";
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

//get a user by id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
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
  console.log(email);
  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1`, [
      email,
    ]); //Verifying if the user exists in the database

    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
        success: false,
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        //Comparing the hashed password
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
            name: user[0].name,
            token: token,
          });
        } else {
          //Declaring the errors
          if (result !== true)
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
      error: "Database error occurred while logging in!", //Database connection error
      success: false,
    });
  }
};

// export const getProfile = async (req, res) => {
//   console.log("req.payload >>>>", req.payload);
//   res.status(201).json(`authorized request for  ${req.payload.email}`);
// };

export const getUserProfile = async (req, res) => {
  const id = req.query.id;

  try {
    const user = await pool.query(
      `SELECT name, email FROM users WHERE id = $1`,
      [id]
    );

    res.status(200).json({
      user: user.rows[0],
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "can't get a profile",
      success: false,
    });
  }
};

export const updateUsername = async (req, res) => {
  const { name, id } = req.body;
  pool.query(`UPDATE users SET name = $1 WHERE id = $2;`, [name, id], (err) => {
    if (err) {
      console.log(id);
      console.error(err);
      return res.status(500).json({
        error: "Database error",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
      });
    }
  });
};
