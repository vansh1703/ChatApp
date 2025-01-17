import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors'

import userRoute from "./routes/user.route.js"

const app = express()
dotenv.config();

//middlewere
app.use(express.json());

app.use(cors())

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try{
  mongoose.connect(URI)
  console.log("connected to mongodb");
} catch(error){
  console.log(error);
}

//routes
app.use("/user" , userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})