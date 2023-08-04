import mongoose from 'mongoose';
// const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    section: {
        type:String, //general,medical,etc... (section title name)
        required:true
    },
    photos: {
        type:String,
        required:true
    },
    name: {
        type:String, //productName
        required:true
    },
    description: {
        type:String,
        required:false
    },
})

export default mongoose.model("Product",ProductSchema);