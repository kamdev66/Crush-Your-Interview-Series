const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{type:String,trim:true,required:true,maxLength:32,unique:true},
    slug:{  //slug is the url friendly version of category eg:- react js will be react-js
       type:String,unique:true,lowercase:true,
    }
})

module.exports=mongoose.model('Category',categorySchema);