import express from "express";
import apiController from "../Controller/apiController.js";
import customerController from "../Controller/customerController.js";
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUser ,deleteUserApi ,postUploadSingleFileApi , postUploadMultipleFilesAPI} = apiController;
const {postCreateCustomer , postCreateArrayCustomer,  getAllCustomers , UpdateCustomers,DeleteCustomers} = customerController;
//route
routerAPI.get("/users", getUsersAPI); 
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUser);
routerAPI.delete("/users", deleteUserApi);


routerAPI.post("/file",postUploadSingleFileApi);
routerAPI.post("/files",postUploadMultipleFilesAPI);

routerAPI.post("/customer" , postCreateCustomer);
routerAPI.post("/customers-many" , postCreateArrayCustomer);
routerAPI.get("/customers" , getAllCustomers);
routerAPI.put("/customers/update" , UpdateCustomers);
routerAPI.delete("/customers" , DeleteCustomers);
export default routerAPI;
