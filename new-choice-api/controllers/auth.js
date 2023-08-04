import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register= async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });
        await newUser.save();
        res.status(200).send({message:"User has been created"});
    }catch(err){
        next(err)
    }
}

export const login= async(req,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user){
            return next(createError(404,"User Not Found!!"))
        }

        const email = await User.findOne({email:req.body.email});
        if(!email){
            return next(createError(404,"Wrong Password!!"))
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400,"Wrong Password!"));

        // require('crypto').randomBytes(48, function(err, buffer) {
        //     const token = buffer.toString('hex');
        //     console.log(token);
        //   });
          
        const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT);
        const {password, isAdmin, ...otherUserDetails} =user._doc;
        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json({...otherUserDetails});
    }catch(err){
        next(err);
    }
}