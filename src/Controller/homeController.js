import connection from "../config/database.js ";
import {
  getAllUser,
  getUserById,
  UpdateUserId,
} from "../services/CRUDService.js";

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  res.render("createUsers.ejs");
};

const postCreateUser = async (req, res) => {
  console.log("««««« req.body »»»»»", req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await connection.query(
    ` INSERT INTO  Users(email,name,city) VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log("««««« results »»»»»", results);
  res.send("create user ative");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await UpdateUserId(email, name, city, userId);
  res.send("update user ative");
};
export default {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
