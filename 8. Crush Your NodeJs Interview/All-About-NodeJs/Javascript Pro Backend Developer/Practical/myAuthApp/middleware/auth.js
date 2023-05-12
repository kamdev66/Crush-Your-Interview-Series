const jwt=require('jsonwebtoken')

//model is optional here
const auth=(req,res,next)=>{
    const token=req.header("Authorization").replace("Bearer ","") ||req.cookies.token||req.body.token;
    if(!token){
        return res.status(403).send("Token is missing")
    }
    //in try block we will verify the token
    try{
      const decode=jwt.verify(token,process.env.SECRET_KEY)//ye token aur secret lega
      console.log(decode)  //user_id: '6333254cce7a6504bbcbdfc6',email: 'tesl23@gmail.com', qki hamne token create krte time ye sab payload me veja tha
      req.user=decode; //it's upto me ,we can add anywhere. or,
      //we can bring in info from db
    }catch(error){
        return res.status(401).send('Invalid Tokken')
    }
    return next() //this is most important part,this will go upto your last line of project
}

//this method need to be imported wherever we want to use it.so,we need to export that.
module.exports=auth;
