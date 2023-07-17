require("dotenv").config()
const jwt=require("jsonwebtoken")
const login=async(req,res)=>{
  try{
    const{page_id,page_access_token}=req.body;
    if(page_id,page_access_token){
     const response=await fetch(`https://graph.facebook.com/v17.0/${page_id}?fields=picture.width(400).height(400),name&access_token=${page_access_token}`)
     const result=await response.json();
     if(result.error){
      res.send({error:"could not verify the page details"})
     }else{
      const data={ page_id,page_access_token }
      const JwtKey=process.env.JWT_KEY;
      const  token= jwt.sign(
        data
      , JwtKey, { expiresIn: '48h' });

     res.send({success:"token generate successfully",data:{picture:result.picture.data.url,name:result.name,page_id},token});
     }
    }
  }catch(e){
    res.send({error:"some error occured"})
  }
}

module.exports={login}