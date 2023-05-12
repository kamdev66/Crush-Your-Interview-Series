const bcrypt=require('bcrypt');

exports.hashPassword=(password)=>{  //password is the plain password
   return new Promise((resolve,reject)=>{
    bcrypt.genSalt(12,(err,salt)=>{    //genSalt fn. used to generate the salt.  12 is the strength
        if(err){
            reject(err);
        }
        bcrypt.hash(password,salt,(err,hash)=>{
            if(err){
                reject(err);
            }
            resolve(hash);
        })
    })   
   })
}

// suppose you gave the password:- 1234567
// your hashed Password will look like this :- snijvkvkfk,mpofbklbglbkgpolg;lk-ewmojo


exports.comparePassword=(password,hashed)=>{  //password is the plain password and hashed is the hashedpassword that stored in the database
    return bcrypt.compare(password,hashed); 
}