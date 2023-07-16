const jwt=require("jsonwebtoken")

const verifyAuth=(req,res,next)=>{
    try{
        if(req.body.auth){
            const decoded = jwt.verify(req.body.auth,process.env.JwtKey);
             req.body.page_id=decoded.page_id;
             req.body.page_access_token=decoded.page_access_token
                next();
        }else{
            res.send({"error":"please provide the necessary fields"});
        }
    }
    catch(e){
        res.send({"error":"authentication error"})
    }
}

module.exports=verifyAuth