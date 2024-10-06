import express from "express";
import apiController from "../Controller/apiController.js";
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUser ,deleteUserApi ,postUploadSingleFileApi , postUploadMultipleFilesAPI} = apiController;

//route
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUser);
routerAPI.delete("/users", deleteUserApi);
routerAPI.post("/file",postUploadSingleFileApi);
routerAPI.post("/files",postUploadMultipleFilesAPI)
export default routerAPI;
