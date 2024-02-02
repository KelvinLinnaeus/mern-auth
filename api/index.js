import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config()

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("Server Listening on port 3000")
})

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Database")
    
  })
  .catch(error => console.log(error))

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)