require("dotenv").config()
const verifyApiRequest=(req,res,next)=>{
    const request_origin=req.get("origin")
    var api_access_token;
    if(req.body.api_access_token){
         api_access_token=req.body.api_access_token
    }else{
         api_access_token=req.query.api_access_token
    }

    
    if(request_origin===process.env.ACCEPTED_URL && api_access_token===process.env.API_ACCESS_TOKEN){
        next()
    }else{
        console.log("ee")
        res.send({error:'something went wrong'})
    }
}

module.exports=verifyApiRequest;