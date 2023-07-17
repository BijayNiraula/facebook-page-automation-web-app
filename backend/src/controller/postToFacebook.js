require("dotenv").config()
const fs=require("fs")
const path=require("path")
const Post = require("../models/posts")
const url = process.env.FacebookUrl
const mime=require("mime")
const postToFacebook = () => {
  
  setInterval(async () => {
  console.log("post to facebook loop running")
    try{
    const posts = await Post.find({time:{$lte:Date.now()}}).sort({ time: 1 });
     
    posts.forEach(async (post)=>{
      var url;
      const formdata=new FormData();
      formdata.append("access_token",post.page_access_token);


     if(post.img){
      url=`https://graph.facebook.com/v17.0/${post.page_id}/photos`
      const imgPath= path.join(__dirname+"../../../","public",post.img.replace(`${process.env.BASE_URL}`,"")).trim()
      const imgName=path.basename(imgPath)
      const imgMimeType=mime.getType(imgPath)
      const imgData=fs.readFileSync(imgPath)
      const blob=new Blob([imgData],{type:imgMimeType});
      formdata.append('source', blob,imgName);
       if(post.text){
        formdata.append("caption",post.text);
       }
     }
     else{
      formdata.append('message', post.text);
      url=`https://graph.facebook.com/v17.0/${post.page_id}/feed`
     }
        const response = await fetch(url, {
          method: "POST",
          body:formdata
        })
        const result = await response.json();
        console.log(result)
        if (!result.error) {
            // delete the post from db
       await  Post.deleteOne({_id:post._id,page_id:post.page_id})

       // delete the post img if exists
       if(post.img){
         const imgPath= path.join(__dirname+"../../../","public",post.img.replace(`${process.env.BASE_URL}`,"")).trim()
         if(fs.existsSync(imgPath)){
           fs.unlinkSync(imgPath) 
         }
     }
             console.log({success:"posted to the page"})
        } else {
          console.log({ error: "could not able to post in this page :" + post.page_id })
        }
    })
  }
  catch(e){
    console.log(e)
    console.log({error:"some error occured"})
  }
  }, 10000)
}
module.exports = postToFacebook
