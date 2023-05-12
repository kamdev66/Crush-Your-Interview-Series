const jwt=require('jsonwebtoken');
const User=require('../models/user')
// const dotenv=require('dotenv');

// dotenv.config();


exports.requireSignin=(req,res,next)=>{
   try {
    const decoded=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
    // console.log(decoded);
    req.user=decoded;
    next();
   } catch (err) {
    return res.status(401).json(err);
   }
};


exports.isAdmin=async(req,res,next)=>{
   try {
      const user=await User.findById(req.user._id);
      if(user.role !== 1){   //maine pahle !== isliye check kiya h qki pahle hame error check krke return krna chahiye
         return res.status(401).send('Unauthorized');
      }else{
         next();
      }
   } catch (error) {
      console.log(error);
   }
}