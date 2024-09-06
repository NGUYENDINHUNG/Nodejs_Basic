import connection from "../config/database.js ";
import { getAllUser } from '../services/CRUDService.js';

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  console.log('««««« results »»»»»', results);
  return res.render("home.ejs",{listUsers:results});
};

const getImages = (req, res) => {
  res.render("sample.ejs");
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

  // const [results, fields] = await connection.query("select * from Users");
  // console.log("««««« results »»»»»", results);
  // res.send("create user ative");
};

const getCreatePage = (req, res) => {
  res.render("createUsers.ejs");
};

export default {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getImages,
};
