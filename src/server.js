import express from "express";
//import cors from "cors";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./routes/wep.js";
import apiRoutes from "./routes/api.js"
//import mysql from "mysql2/promise";
import connection from "./config/database.js";


//app config.
const app = express(); //app express
const port = process.env.PORT || 4000;

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
    await connection();
    app.listen(port, () => {
      console.log(`Server Started on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("««««« error connection to DB »»»»»", error);
  }
})();
