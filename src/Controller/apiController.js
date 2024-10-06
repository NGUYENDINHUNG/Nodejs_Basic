import connection from "../config/database.js ";
import {
  uploadSingleFile,
  uploadMultipleFiles,
} from "../services/fileServices.js";

import Users from "../models/user.js";

const getUsersAPI = async (req, res) => {
  let results = await Users.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
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
  return res.status(200).json({
    errorCode: 0,
    data: users,
  });
};

const putUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  let users = await Users.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: users,
  });
};

const deleteUserApi = async (req, res) => {
  const id = req.body.userId;
  //await deleteUserById(id);
  let users = await Users.deleteOne({
    _id: id,
  });

  return res.status(200).json({
    errorCode: 0,
    data: users,
  });
};

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let results = await uploadSingleFile(req.files.image);

  return res.send("ok single");
};

const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  // console.log(req.files);
  //upload single => files is an object
  //upload multiple => files is an array
  if (Array.isArray(req.files.image)) {
    console.log('««««« isArray »»»»»', isArray);
    //upload multiple
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    }); 
 
  } else {
    //upload single
    return await postUploadSingleFileApi(req, res);
  }
};
export default {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUser,
  deleteUserApi,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
};
