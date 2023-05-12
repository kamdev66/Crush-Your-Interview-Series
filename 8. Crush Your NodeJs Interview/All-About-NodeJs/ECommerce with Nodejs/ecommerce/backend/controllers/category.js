const Category=require('../models/category')  //import Category model
const slugify =require('slugify');


exports.create=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name.trim()){
            return res.json({error:'Name is required'});
        }
        const existingCategory=await Category.findOne({name});
        if(existingCategory){
            return res.json({error:'Already exists'});
        }
        const category=await new Category({name,slug:slugify(name)}).save();
        res.json(category);
    } catch (error) {
       console.log(error);
       return res.status(400).json(error); 
    }
}


exports.update=async(req,res)=>{
   try {
    const {name}=req.body;
    const {categoryId}=req.params;
    const category=await Category.findByIdAndUpdate(categoryId,{name,slug:slugify(name)},{new:true})
    res.json(category);
} catch (error) {
    console.log(error);
    return res.status(400).json(error.message); //mongodb gives us the message object,so we can use it.
   }
}

exports.remove=async(req,res)=>{
    try {
    const removed=await Category.findByIdAndDelete(req.params.categoryId);
    res.json(removed);
    } catch (error) {
     console.log(error);
     return res.status(400).json(error.message); //mongodb gives us the message object,so we can use it.
    }
}


//get all category
exports.list=async(req,res)=>{
    try {
    const all=await Category.find({});
    res.json(all);
    } catch (error) {
     console.log(error);
     return res.status(400).json(error.message); //mongodb gives us the message object,so we can use it.
    }
}


//get single category
exports.read=async(req,res)=>{
    try {
      const category=await Category.findOne({slug:req.params.slug});
      res.json(category);
    } catch (error) {
     console.log(error);
     return res.status(400).json(error.message); 
    }
}