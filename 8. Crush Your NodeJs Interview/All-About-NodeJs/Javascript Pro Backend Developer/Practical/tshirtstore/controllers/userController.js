const User=require('../models/user')
const BigPromise=require('../middleware/bigPromise');
const CustomError = require('../utils/customError');
const fileUpload=require('express-fileupload')
const cloudinary=require('cloudinary')
const mailHelper = require("../utils/emailHelper");
const crypto=require('crypto')


exports.signup = BigPromise(async(req,res,next)=>{
   if(!req.files){
      return next(new CustomError("Photo is required for signup",400))
   }

   const {name,email,password}=req.body;
   if(!email || !name || !password){
      //hum yaha par jo error solve ke liye customError bnaya tha uska use krenge,first  import
      return next(new CustomError('Name,Email and password are required',400)) //isko humnext ke andar likenge qki ye middleware hai jisko hamne utils me likha h 
   }
  //pahle hum check kr lrnge ki req se koi file aa rha h ki nhi
    
        let file=req.files.photo //fronend ko btana pdega ki photo call kro tabhi work krega
        const result=await cloudinary.v2.uploader.upload(file.tempFilePath,{
         folder:"users",
         width:150,
         crop:"scale"
        })

     //agar name email aur pasword diya hai to database me store kra denge
     const user=await User.create({
        name,
        email,
        password,
        photo:{
         id:result.public_id,
         secure_url:result.secure_url
        }
     })
     //user jab successfully register kr lega to hum use cookie token send krenge
     const token=user.getJwtToken();
     const options={
        expires:new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true
     }
     //agar hum password nhi send krna chahte hai to
     user.password=undefined;
     //ab hum token aur options ko as a cookie send kr denge aur json me token aur user ko vejenge
     res.status(200).cookie("token",token,options).json({ //"token" ye jo double quotes me hai ye cookie ka name hai
           success:true,
           token,user
     })  
})

exports.login = BigPromise(async (req,res,next)=>{
   const {email,password}=req.body;

   //chack for presence of email and password
   if(!email || !password){
      return next(new CustomError('Please provide email and pasword',400))
   }
   //get user from DB
   const user=await User.findOne({email}).select("+password") //select("+password") ye hamne isliye lgaya hai qki hamne modal me isko false kiya tha.   //yaha par hum email se find kr rhe hai,hum id se v kr skte hai
   //if user not found in DB
   if(!user){
      return next(new CustomError('You are not registered in our database',400))
   }
   //match the password
   const isPasswordCorrect=await user.isValidatedPassword(password) //isme hamne user(small) diya hai qki ham database me nhi kr rhe h
   
   //if password is not correct
   if(!isPasswordCorrect){
      return next(new CustomError("password doesn't match or exist",400))
   }

   //now,we have checked everythig, if all goes good,we will send the token now
   const token=user.getJwtToken();
     const options={
        expires:new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true
     }
     //agar hum password nhi send krna chahte hai to
     user.password=undefined;
     //ab hum token aur options ko as a cookie send kr denge aur json me token aur user ko vejenge
     res.status(200).cookie("token",token,options).json({ //"token" ye jo double quotes me hai ye cookie ka name hai
           success:true,
           token,user
     })  

})


//logout
exports.logout = BigPromise(async (req, res, next) => {
   //clear the cookie
   res.cookie("token", null, {
     expires: new Date(Date.now()),
     httpOnly: true,
   });
   //send JSON response for success
   res.status(200).json({
     succes: true,
     message: "Logout success",
   });
 });

//forgot fassword

 exports.forgotPassword = BigPromise(async (req, res, next) => {
   // collect email
   const { email } = req.body;
   console.log(email);
   // find user in database
   const user = await User.findOne({ email });
 
   // if user not found in database
   if (!user) {
     return next(new CustomError("Email not found as registered", 400));
   }
 
   //get token from user model methods
   const forgotToken = user.getForgotPasswordToken();
 
   // save user fields in DB
   await user.save({ validateBeforeSave: false });
 
   // create a URL
   const myUrl = `${req.protocol}://${req.get(  //req.protocol hame btayega ki http hai ya https
     "host"
   )}/api/v1/password/reset/${forgotToken}`;
 
   //URL for deployment as front end might be running at different URL
   // const myUrl = `${process.env.FRONT_END}/password/reset/${forgotToken}`;
 
   // craft a message
   const message = `Copy paste this link in your URL and hit enter \n\n ${myUrl}`;
 
   // attempt to send email
   try {
     await mailHelper({
       email: user.email,
       subject: "Password reset email",
       message,
     });
 
     // json reponse if email is success
     res.status(200).json({
       succes: true,
       message: "Email sent successfully",
     });
   } catch (error) {
     // reset user fields if things goes wrong
     user.forgotPasswordToken = undefined;
     user.forgotPasswordExpiry = undefined;
     await user.save({ validateBeforeSave: false });
 
     // send error response
     return next(new CustomError(error.message, 500));
   }
 });


 exports.passwordReset=BigPromise()

 