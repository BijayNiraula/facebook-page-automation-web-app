const Post = require("../models/posts")
const fs=require("fs")
require('dotenv').config()
const path=require("path")



//  add post function 
const addPost = async (req, res) => {
    const { text, page_access_token, page_id, publish_date,utcTimeStamp } = req.body;
    try {
        if (publish_date && utcTimeStamp && text || req.file) {
            const obj = { text, page_access_token, page_id, publish_date,time:utcTimeStamp };
            if (req.file) {
                  // code for local window machine
                const imgLink = req.file.path.replace("public\\files\\", "");
                obj.img = `${process.env.BASE_URL}/files/${imgLink} `

                //    code  for server 
                // const imgLink = req.file.path.replace("public/", "");
                // obj.img = `${process.env.BASE_URL}/${imgLink} `
            }
            const result = await Post.create(obj)
            if (result) {
                const data={...result._doc,page_access_token:null}
                res.send({ success: "added the post successfully", data });
            } else {
                res.send({ error: "could not able to add the post " })
            }
        } else {
            res.send({ error: "please provide all the required fields" })
        }
    } catch (e) {
        console.log(e)
        res.send({ error: "some error occured" })
    }
}




// get post function 
const getPost = async (req, res) => {
    const { page_id} = req.body
    try {
        const data = await Post.find({ page_id}).select("text _id page_id img time publish_date ")
        res.send({ "success": "data fetched successfully", data })
    }
    catch (e) {
        console.log(e)
        res.send({ error: "some error occured" })
    }
}



// delete post function 
const deletePost = async (req, res) => {
    const { _id, page_id } = req.body;
    try {
        if (_id && page_id) {
            const oldPostData=await Post.findOne({_id,page_id}).select("img ");
            const result = await Post.deleteOne({ _id, page_id})
            if (result.deletedCount == 1) {
                if(oldPostData.img){
                    const oldFilePath= path.join(__dirname+"../../../","public",oldPostData.img.replace(`${process.env.BASE_URL}`,"")).trim()
                    if(fs.existsSync(oldFilePath)){
                      fs.unlinkSync(oldFilePath) 
                    }
                }
                res.send({ "success": "delete the post successfully" })
            } else {
                res.send({ error: "could not able delete the post" })
            }
        } else {
            res.send({ error: "please provide all the fields" })
        }
    } catch (e) {
        console.log(e)
        res.send({ error: "some error occured" })
    }
}


// edit post funtiion 
const editPost = async (req, res) => {
    const { _id, page_id, page_access_token, text, publish_date,utcTimeStamp } = req.body;
    try {
        if (publish_date && utcTimeStamp && _id && text||text=="") {
            const oldPostData=await Post.findOne({_id,page_id}).select("text _id page_id img time publish_date ");
            const obj = { text,page_access_token, publish_date,time:utcTimeStamp};
            if (req.file) {

                //   for local window machine
                const imgLink = req.file.path.replace("public\\files\\", "");
                obj.img = `${process.env.BASE_URL}/files/${imgLink} `

                // for server
                // const imgLink =  req.file.path.replace("public/", "");
                // obj.img = `${process.env.BASE_URL}/${imgLink} `

                 if(oldPostData.img){
                  const oldFilePath= path.join(__dirname+"../../../","public",oldPostData.img.replace(`${process.env.BASE_URL}`,"")).trim()
                  if(fs.existsSync(oldFilePath)){
                    fs.unlinkSync(oldFilePath) 
                  }
                }
            }
            const result = await Post.updateOne({ _id, page_id }, obj)
            if (result.acknowledged==true) {
                res.send({ success: "updated  successfully", data: {...oldPostData._doc,...obj,page_access_token:null} })
            }
            else {
                res.send({ error: "could not update the data" })
            }
        } else {
            res.send({ error: "please provide all fields" })
        }
    } catch (e) {
        console.log(e)
        res.send({ error: "some error occured" })
    }
}


module.exports = { getPost, addPost, deletePost, editPost }