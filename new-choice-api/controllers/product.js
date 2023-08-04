import Product from "../models/Product.js";
import {createError} from "../utils/error.js";

export const createProduct = async(req,res,next)=>{
    try{
        const newProduct=new Product(req.body);
        const savedProduct=await newProduct.save()
        res.status(200).json(savedProduct);
    }catch(err){
        next(err);
    }
}

export const updateProduct = async(req,res,next)=>{
    try{
        const updateProduct=await Product.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true});
        res.status(200).json(updateProduct);
    }catch(err){
        next(err);
    }
}

export const deleteProduct = async(req,res,next)=>{
    try{
        const deleteProduct=await Product.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Product has been deleted");
    }catch(err){
        next(err);
    }
}

export const getProduct = async(req,res,next)=>{
    try{
        const getProduct=await Product.findById(req.params.id);
        res.status(200).json(getProduct);
    }catch(err){
        next(err);
    }
}

export const getAllProducts = async(req,res,next)=>{
    try{
        const getProducts=await Product.find();
        res.status(200).json(getProducts);
    }catch(err){
        next(err);
    }
}