import express from "express";
import homeController from "../Controller/homeController.js";
const router = express.Router();

const { getHomepage, getImages , postCreateUser , getCreatePage } = homeController;

//route
router.get("/", getHomepage);
router.get("/image", getImages);
router.post("/create",postCreateUser);
router.get("/create",getCreatePage);
export default router;
