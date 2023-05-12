const BigPromise=require('../middleware/bigPromise')

exports.home=BigPromise(async (req,res)=> {  
    res.status(200).json({
        success:true,
        greeting:"Hello My World"
    })
});

exports.homeDummy=(req,res)=>{  
    res.status(200).json({
        success:true,
        greeting:"Hello My World HomeDummy"
    })
}