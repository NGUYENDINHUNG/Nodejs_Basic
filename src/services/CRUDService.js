import connection from "../config/database.js"

export const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
};
