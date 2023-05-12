const User=require('../models/user')
const {hashPassword}=require('../helpers/auth')
const {comparePassword}=require('../helpers/auth');
const user = require('../models/user');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');


dotenv.config();


exports.register=async(req,res)=>{
    try {
        //1. destructure name,email,password from req.body
        const {name,email,password}=req.body;
        //2. all fields require validation
        if(!name.trim()){  //trim hamne isliye lgaya qki ye hame name me whitespace nhi chahiye
            return res.json({error:"Name is required"});    //yaha hame return hi use krna h qki error hoga to yahi return kr dega
        }
        if(!email){
            return res.json({error:"Email is required"});
        }
        if(!password || password.length<6){
            return res.json({error:"Password must be at least 6 characters long"})
        }
        //3. check if email is taken
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.json({error:"Email is already taken"});
        }
        //4. hash the password
        const hashedPassword=await hashPassword(password);
        //5. register user
        const user=await new User({name,email,password: hashedPassword}).save();
        //6. create signed jwt token
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        //7. send the response
        res.json({
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                address:user.address,
            },
            token:token 
        })
    } catch (error) {
        console.log(error);
    }
};


exports.login=async(req,res)=>{
    try {
        //1. destructure email,password from req.body
        const {email,password}=req.body;
        //2. all fields require validation
        if(!email){
            return res.json({error:"Email is required"});
        }
        if(!password || password.length<6){
            return res.json({error:"Password must be at least 6 characters long"})
        }
        //3. check if email is registered or not
        const user =await User.findOne({email:email});
        if(!user){
            return res.json({error:"User Not Found"});
        }
        //4. compare the password
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.json({error:"Wrong Password"});
        }
        //5. create signed jwt token
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        //6. send the response
        res.json({
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                address:user.address,
            },
            token:token 
        })
    } catch (error) {
        console.log(error);
    }
};


exports.secret=(req,res)=>{
    res.json({currentUser:req.user});
}