import Contact from '../models/Contacts.js';


export const createContact = async(req,res,next)=>{
    const newContact=new Contact(req.body)

    try{
        const savedContact=await newContact.save()
        res.status(200).json(savedContact);
    }catch(err){
        next(err);
    }
}

export const updateContacts = async(req,res,next)=>{
    try{
        const updateContact=await Product.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true});
        res.status(200).json(updateContact);
    }catch(err){
        next(err);
    }
}

export const deleteContacts = async(req,res,next)=>{
    try{
        const deleteContact=await Product.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Product has been deleted");
    }catch(err){
        next(err);
    }
}

export const getAllContacts = async(req,res,next)=>{
    try{
        const getContacts=await Contact.find();
        res.status(200).json(getContacts);
    }catch(err){
        next(err);
    }
}