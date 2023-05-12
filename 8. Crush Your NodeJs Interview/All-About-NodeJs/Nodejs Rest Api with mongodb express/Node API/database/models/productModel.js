const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
},{
    timestamps:true,
    toObject:{   //isse hum _id ko id me change kr ke database me save krenge and __v ko remove kr denge 
        transform:function(doc,ret,options){ //itis a mongoose toObject transformation
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        } 
    }
})

module.exports=mongoose.model('Product',productSchema)