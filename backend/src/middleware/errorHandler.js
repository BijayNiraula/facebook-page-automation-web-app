const errorHandler=(err,req,res,next)=>{
    if(err){
        res.send({error:"something went wrong "})
        return ;
    }
    next()
}
module.exports=errorHandler