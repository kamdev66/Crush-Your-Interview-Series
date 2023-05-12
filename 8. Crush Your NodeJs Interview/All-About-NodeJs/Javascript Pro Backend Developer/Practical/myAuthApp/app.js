const express = require('express')
require('dotenv').config()   //agar .env file root directory  me nhi rahega to config ke andar uska path dena padega
require('./config/database').connect()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const User=require('./model/User')
const auth=require('./middleware/auth') //we will use this auth , wherever we are defining the route as a middleware use karenge(line no.:-56,where /dashboard qki dashboard ko sirf wahi access kr skta hai ,jo authorize hoga)
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send("<h1>Welcome to the Nodejs World</h1>"))

app.post('/register',async (req,res)=>{
    try {
        const {firstname,lastname,email,password}=req.body;   //express can't handle the json file directly.It needs to use middleware for that. eg:- app.use(express.json())
    
    if(!(email && password && firstname && lastname)){
        res.status(400).send('All fields are required');
    }

    const existingUser=await User.findOne({email:email})  //promise
    if(existingUser){
        res.status(401).send('User Alreday registered');
    }
    //encrypt the password
    const myEncPassword=await bcrypt.hash(password,10)

    const user=await User.create({
        firstname,
        lastname,
        email:email.toLowerCase(),
        password:myEncPassword
    })

    //create token
    const token=jwt.sign(
        {user_id:user._id,email},
        process.env.SECRET_KEY,
        {
            expiresIn:"2h"
        }
    )
    user.token=token
    //update or not in db

    //todo: handle password situation


    res.status(201).json(user)
    } catch (error) {
        console.log(error);
    }
})

app.get("/dashboard",auth,(req,res)=>{
    res.send("Welcome to secret information");
})

module.exports=app;