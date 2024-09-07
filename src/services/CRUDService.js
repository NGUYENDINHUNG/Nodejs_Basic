import connection from "../config/database.js";

export const getAllUser = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

export const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users where id = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
