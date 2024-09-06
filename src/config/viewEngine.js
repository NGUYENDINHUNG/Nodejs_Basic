import express from "express";
import path from "path";
//import { fileURLToPath } from "url";
//import { dirname } from "path";


// Define __dirname for ES modules
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);


const configViewEngine = (app) => {
   // console.log(path.join('./src', "views"))
  app.set("views", path.join('./src', "views"));
  app.set("view engine", "ejs");
  //config staticfile
  app.use(express.static(path.join('./src', "public")));
}


export default configViewEngine;
