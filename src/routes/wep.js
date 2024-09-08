import express from "express";
import homeController from "../Controller/homeController.js";
const router = express.Router();

const { getHomepage , postCreateUser , getCreatePage, getUpdatePage ,postUpdateUser} = homeController;

//route
router.get("/", getHomepage);
router.post("/create",postCreateUser);
router.get("/create",getCreatePage);
router.get("/update/:id",getUpdatePage);
router.post("/update-user",postUpdateUser);
export default router;
