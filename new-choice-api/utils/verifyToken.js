import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    try{
        if(!token){
            return(createError(401, "You are not authenticated!"));
        }
        jwt.verify(token,process.env.JWT,(err,user)=>{
            if(err) {
                res.clearCookie("access_token");
                return(createError(403, "Token is not valid!"));
            }
            req.user=user;
            next();
        })
    }catch(err){
        res.clearCookie("access_token");
        return(createError(403, "Token is not valid!"));
    }
    
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res, next, ()=>{
        console.log(req.user);
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized to delete this account!"));
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res, next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized to delete this account!"));
        }
    })
}