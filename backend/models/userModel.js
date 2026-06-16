const pool = require("../config/db");

// CREATE USER
const createUser = async (name, email, password) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING *",
    [name, email, password, "user"]
  );
  return result.rows[0];
};

// FIND USER BY EMAIL
const getUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );
  return result.rows[0];
};

module.exports = {
  createUser,
  getUserByEmail
};