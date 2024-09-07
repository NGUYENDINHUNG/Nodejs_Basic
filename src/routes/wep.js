import express from "express";
import homeController from "../Controller/homeController.js";
const router = express.Router();

const { getHomepage, getImages , postCreateUser , getCreatePage, getUpdatePage } = homeController;

//route
router.get("/", getHomepage);
router.get("/image", getImages);
router.post("/create",postCreateUser);
router.get("/create",getCreatePage);
router.get("/update/:id",getUpdatePage);
export default router;
