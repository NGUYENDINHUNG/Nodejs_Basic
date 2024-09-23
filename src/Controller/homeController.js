import connection from "../config/database.js ";
import {
  getAllUser,
  getUserById,
  UpdateUserId,
  deleteUserById,
} from "../services/CRUDService.js";
import Users from "../models/user.js";

const getHomepage = async (req, res) => {
  let results = await Users.find({});
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  res.render("createUsers.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await Users.create({
    email,
    name,
    city,
  });
  res.send("create user ative");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  //let user = await getUserById(userId);
  let user = await Users.findById(userId).exec();
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  await Users.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  // await UpdateUserId(email, name, city, userId);
  //res.send("update user ative");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
 // let user = await getUserById(userId);
  let user = await Users.findById(userId).exec();
  res.render("deleteUsers.ejs", { userEdit: user });
};
//delete users
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  //await deleteUserById(id);
 let result = await Users.deleteOne({
    _id:id
  })
  console.log('««««« result »»»»»', result);
  res.redirect("/");
};

export default {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
