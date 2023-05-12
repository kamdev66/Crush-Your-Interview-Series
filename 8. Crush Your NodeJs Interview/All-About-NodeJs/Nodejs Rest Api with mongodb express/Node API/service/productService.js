const Product=require('../database/models/productModel')

module.exports.createProduct=async (serviceData)=>{
    try{
        let product=new Product({...serviceData})
        let result= await product.save();
        return result.toObject();   //toObject is only changed the data ,not affect the data that is already in the database
    }catch(error){
        console.log('Something Wrong',error);
        throw new Error(error);
    }
}