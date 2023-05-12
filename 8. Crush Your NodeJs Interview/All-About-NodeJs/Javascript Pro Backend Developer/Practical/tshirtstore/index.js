const app=require('./app');
const connectWithDB = require('./config/db');
require('dotenv').config()  
const cloudinary=require('cloudinary');

//connect with databases
connectWithDB();

//cloudinary config goes here
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_sceret:process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port:${process.env.PORT}`);
})