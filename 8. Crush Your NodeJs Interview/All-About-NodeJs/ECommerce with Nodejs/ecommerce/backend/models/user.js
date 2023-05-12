const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        trim:true,  //means user can't give backspace in front of name field
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true //each email should be unique
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64   //bcoz length of hashed password is longer
    },
    address:{
        type:String,
        trim:true,
    },
    role:{
        type:Number,
        default:0   //0 means users, for admin we will change it to 1.
    }
},
{timestamps:true}
);

//upper one is schema but our main goal is to create model.model interacts with collection in the database

module.exports=mongoose.model('User',userSchema) //1st argument is model name and 2nd is schema




