import express from "express";
import { createContact, updateContacts,deleteContacts, getAllContacts } from "../controllers/contacts.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//CREATE
router.post("/",verifyToken, verifyAdmin, createContact);
//UPDATE
router.put("/:id",verifyToken, verifyAdmin, updateContacts);
//DELETE
router.delete("/:id",verifyToken, verifyAdmin, deleteContacts);
//GETALL
router.get("/",verifyToken, verifyAdmin, getAllContacts);

export default router;