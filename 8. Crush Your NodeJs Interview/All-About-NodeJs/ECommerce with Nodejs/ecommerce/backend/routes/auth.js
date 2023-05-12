const express=require('express');
const router=express.Router(); //we use Router fn. of express and put it in the router variable.

//middlewares
const {requireSignin,isAdmin}=require('../middlewares/auth')

//controllers
const { register,login,secret } = require('../controllers/auth');

//routes
router.post('/register',register);
router.post('/login',login);

//testing
router.get('/secret',requireSignin,isAdmin,secret);




module.exports=router;