import * as dotenv from "dotenv";
import pg from "pg";
// import { Sequelize } from "sequelize";

dotenv.config();

const { Pool } = pg;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

export const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
});

// const sequelize = new Sequelize("user", "postgres", "Matiboro@1002", {
//   dialect: "postgres",
// });
