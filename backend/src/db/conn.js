require("dotenv").config()
const mongoose=require("mongoose");
const url=process.env.DbUrl;
const dbConnect=async()=>{
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        
          })
    }catch(e){
        console.log("could not connect to the db")
    }
}

module.exports=dbConnect;