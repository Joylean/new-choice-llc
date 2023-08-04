import express from "express";
import { createUser, updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//auth in Postman
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("You are logged in")
// })
//authuser in postman
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("You are logged in and you can delete your account anytime")
// })
//authadmin in postman
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hi Admin, You are logged in and you can delete any account")
// })

//CREATE
router.post("/", verifyToken, verifyUser, createUser);
//UPDATE
router.put("/:id", verifyToken, verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyToken, verifyUser, deleteUser);
//GET
router.get("/:id", verifyToken, verifyUser, getUser);
//GETALL
router.get("/", verifyToken, verifyAdmin, getAllUsers);

export default router;