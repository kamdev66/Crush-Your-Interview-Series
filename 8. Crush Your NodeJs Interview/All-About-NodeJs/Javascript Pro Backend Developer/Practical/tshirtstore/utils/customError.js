class CustomError extends Error{
    constructor(message,code){   //yaha pr code mtlb status code hai,message by default rhta hai,agar hame status code lana hai to aise laa skte h
        super(message);
        this.code=code;
    }
}

module.exports=CustomError;