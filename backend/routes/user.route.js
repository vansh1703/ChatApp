import express from "express";
import { login, logout, signup } from "../controller/user.controller.js";
const router = express.Router()

router.post("/signup" ,signup)
router.post("/login" , login) 
router.post("/logout" , logout)

export default router;

//2.45 mins new phase starting to show users that we have created on frontend
//3.05 routing starts if user is loged in then only home will be shown