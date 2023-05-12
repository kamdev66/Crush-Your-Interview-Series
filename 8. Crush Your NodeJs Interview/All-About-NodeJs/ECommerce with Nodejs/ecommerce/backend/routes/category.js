const express=require('express');
const router=express.Router(); 

//middlewares
const {requireSignin,isAdmin}=require('../middlewares/auth')

//controllers
const {create,update,remove,list,read}=require('../controllers/category')

router.post('/category',requireSignin,isAdmin,create);
router.put('/category/:categoryId',requireSignin,isAdmin,update);
router.delete('/category/:categoryId',requireSignin,isAdmin,remove);//at the place of remove we can't use delete ,bcoz delete is the reserved keyword in javascript
router.get('/categories',list); //for categories,we don't need middleware,bcoz it will be publically available
router.get('/category/:slug',read);  //get only single category


module.exports=router;