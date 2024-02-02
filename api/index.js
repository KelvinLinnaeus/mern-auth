import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express();




app.listen(3000, () => {
  console.log("Server Listening on port 3000")
})

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Database")
    
  })
  .catch(error => console.log(error))