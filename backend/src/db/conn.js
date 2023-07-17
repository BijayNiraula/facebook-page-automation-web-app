require("dotenv").config()
const mongoose=require("mongoose");
const url= process.env.DB_URL;

const dbConnect=async()=>{
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        
          })
          console.log("connected to db")
    }catch(e){
        console.log("could not connect to the db")
    }
}


module.exports=dbConnect;