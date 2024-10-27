import express from "express";
//import cors from "cors";
import fileUpload from "express-fileupload";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./routes/wep.js";
import apiRoutes from "./routes/api.js";
//import mysql from "mysql2/promise";
import connection from "./config/database.js";
import { MongoClient } from "mongodb";

//app config.
const app = express(); //app express
const port = process.env.PORT || 4000;

//config file upload
//app.use(fileUpload(), express.static("public/images"));

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//middleware
// app.use(express.json());
// app.use(cors());

//config template engine
configViewEngine(app);

// route
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
  //test connection
  try {
    //using mongooes
     await connection();

    //using mongodb driver
    // Connection URL
   // const url = process.env.DB_HOST_WITH_DRIVER;
   // const client = new MongoClient(url);

    // Database Name
  //  const dbName = process.env.DB_NAME;

    // Use connect method to connect to the server
   // await client.connect();
  //  console.log("Connected successfully to server");
   // const db = client.db(dbName);
   // const collection = db.collection("customers");

    //console.log('««««« conllection.find({address:"h"}) »»»»»', await collection.findOne({address:"ho chi minh"}));
    app.listen(port, () => {
      console.log(`Server Started on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("««««« error connection to DB »»»»»", error);
  }
})();
