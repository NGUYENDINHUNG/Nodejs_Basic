import express from "express";
import apiController from "../Controller/apiController.js";
import customerController from "../Controller/customerController.js";
import projectController from "../Controller/projectController.js";
const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUser,
  deleteUserApi,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = apiController;

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers,
  UpdateCustomers,
  DeleteCustomers,
  DeleteArrayCustomers,
} = customerController;

const { postCreateProject ,getProject } = projectController;

//route_user
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUser);
routerAPI.delete("/users", deleteUserApi);
//router upload files
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);
//router customers
routerAPI.post("/customer", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers/update", UpdateCustomers);
routerAPI.delete("/customers", DeleteCustomers);
routerAPI.delete("/customers-many", DeleteArrayCustomers);
//router query
routerAPI.get("/info", (req, res) => {
  console.log("««««« req.query »»»»»", req.query);
  return res.status(200).json({
    data: req.query,
  });
});
//router params
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("««««« req.query »»»»»", req.params);
  return res.status(200).json({
    data: req.params,
  });
});
//router project

routerAPI.post("/project", postCreateProject);
routerAPI.get("/project", getProject);

export default routerAPI;
