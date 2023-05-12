module.exports=func=>(req,res,next)=>{
    Promise.resolve(func(req,res,next)).catch(next);
}
//hum ise kahi v kisi naam se import kr skte hai,qki hmne ise name nhi diya hai