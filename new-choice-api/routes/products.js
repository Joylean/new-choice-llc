import express from "express";
import { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } from "../controllers/product.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//CREATE
router.post("/",verifyToken, verifyAdmin, createProduct);
//UPDATE
router.put("/:id",verifyToken, verifyAdmin, updateProduct);
//DELETE
router.delete("/:id",verifyToken, verifyAdmin, deleteProduct);
//GET
router.get("/:id", getProduct);
//GETALL
router.get("/", getAllProducts);

export default router;