import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import productsRoute from "./routes/products.js";
import usersRoute from "./routes/users.js";
import contactRoute from "./routes/contact.js";
import cookieParser from "cookie-parser";
const app=express();
dotenv.config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB successfully!")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
})

//app.get("/",(req,res)=>{
//    res.send("hello NewCHOICE")
//})

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/contact", contactRoute);
app.use("/api/users", usersRoute);

//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage=err.message||"Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})

app.listen(8800, ()=>{
    connect();
    console.log("API Connected to port 8800!!")
})