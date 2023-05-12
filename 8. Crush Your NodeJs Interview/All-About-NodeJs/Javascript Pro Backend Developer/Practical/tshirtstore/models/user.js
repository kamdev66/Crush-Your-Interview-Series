const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const crypto=require('crypto')//It is  a default node package used for generating random large string, ise hame install nhi karna pdta 


const userSchema=new mongoose.Schema({
     name:{
        type:String,
        required:[true,'Please provide a name'],
        maxLength:[40,'Name should be under 40 characters']
     },
     email:{
        type:String,
        required:[true,'Please provide an email'],
        validate:[validator.isEmail,'Please enter email in correct format'],
        unique:true
     },
     password:{
        type:String,
        required:[true,'Please provide a Password'],
        minLength:[6,'Password should be atleast 6 char'],
        select:false //agar hum kisi user ko select krke laana chahte hai to uska password nhi aayega
     },
     role:{
        type:String,
        default:'user'
     },
     photo:{
        id:{
            type:String,
            required:true
        },
        secure_url:{
            type:String,
            required:true
        }
     },
     forgotPasswordToken:String,
     forgotPasswordExpiry:Date,
     createdAt:{
        type:Date,
        default:Date.now
     }
})

//encrypt password before save
userSchema.pre('save',async function(next){
   if(!this.isModified("password")){
    return next();
   }
   this.password=await bcrypt.hash(this.password,10);
})

//validate the password with passed on user password
userSchema.methods.isValidatedPassword=async function(userSendPassword){
    return await bcrypt.compare(userSendPassword,this.password)
}

//create and return jwt token
userSchema.methods.getJwtToken=function(){  //getJwtToken ke place pr hum kuch vname de skte hai
    return  jwt.sign({id:this._id},process.env.JWT_SECRET,{   //here {id:this._id} is payload and JWT_SECRET is secret key
        expiresIn:process.env.JWT_EXPIRY
     })
}

//generate forget password token(string)
userSchema.methods.getForgotPasswordToken=function(){
    //generate a long and random string
    const forgotToken=crypto.randomBytes(20).toString('hex');
    this.forgotPasswordToken=forgotToken;

    //time of token
    this.forgotPasswordExpiry=Date.now()+ 20*60*1000;

    return forgotToken
}


module.exports=mongoose.model('User',userSchema)//mongoose ye userSChema lega aur User name se modal bna dega



