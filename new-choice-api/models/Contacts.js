import mongoose from 'mongoose';
// const { Schema } = mongoose;

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    links:{
        type:[String],
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:true
    }
},
{timestamps:true})

export default mongoose.model("Contact",ContactSchema);