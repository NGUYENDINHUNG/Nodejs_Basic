import connection from "../config/database.js ";


import Users from "../models/user.js";

const getUsersAPI = async (req, res) => {
  let results = await Users.find({});

  return res.status(200).json(
    {
    errorCode:0,
    data: results
    }
)
};
const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

let users = await Users.create({
    email,
    name,
    city,
  });
  return res.status(200).json(
    {
    errorCode:0,
    data: users
    }
)
};

const putUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

 let users = await Users.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json(
    {
    errorCode:0,
    data: users
    }
)
  
};

const deleteUserApi = async (req, res) => {
  const id = req.body.userId;
  //await deleteUserById(id);
 let users = await Users.deleteOne({
    _id:id
  })

  return res.status(200).json(
    {
    errorCode:0,
    data: users
    }
)
};


export default {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUser,
    deleteUserApi,
}