import pool from "../dbConfig.js";

/**
 * this async function is used to query database for user name by providing uid
 * @param {*} uid
 * @returns user name string
 */
export const dbGetUserNameByUid = async (uid) => {
  const authorNameQuery = await pool.query(
    `SELECT name FROM users WHERE uid = $1`,
    [uid]
  );

  const userName = authorNameQuery.rows[0].name;

  return userName;
};
