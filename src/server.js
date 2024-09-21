import express from "express";
import cors from "cors";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./routes/wep.js";
import mysql from "mysql2/promise";
import connection from "./config/database.js";
import mongoose from "mongoose";
//app config
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

const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'hoi dan it cat' });
cat.save();




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
