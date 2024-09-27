import express from "express";
import apiController from "../Controller/apiController.js";
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUser ,deleteUserApi } = apiController;

//route
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUser);
routerAPI.delete("/users", deleteUserApi);
export default routerAPI;
