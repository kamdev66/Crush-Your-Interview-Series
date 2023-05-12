const productService=require('../service/productService')

module.exports.createProduct=async (req,res)=>{
    let response={}
   try{
    const responseFromService= await productService.createProduct(req.body)
    response.status=200;
    response.message='Product created successfully';
    response.body=responseFromService
   }catch(error){
    console.log('Something Wrong:Controller:createProduct',error);
   }
   return res.status(response.status).send(response);
}