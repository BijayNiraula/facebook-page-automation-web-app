const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    time:{
        type:Number,
        required:true
    },
    publish_date:{
        type:String,
        required:true
    },
    img:{
        type:String,
        
    },
    text:{
        type:String
    },
    status:{ 
        type:Boolean,
        default:true
    },
    page_id:{
        type:String,
        required:true
    },
    page_access_token:{
        type:String,
        required:true
    }

});

const Post=mongoose.model('Post',postSchema);
module.exports=Post