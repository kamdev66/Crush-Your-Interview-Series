const express=require('express');
const formidable = require('express-formidable');

const router=express.Router(); 

//middlewares
const {requireSignin,isAdmin}=require('../middlewares/auth')

//controllers
const {create}=require('../controllers/ProductController')

router.post('/product',requireSignin,isAdmin,formidable(),create);


module.exports=router;