require("dotenv").config()
const express=require("express")
const pageRoute = require("./routes/page")
const  cors =require("cors")
const dbConnect=require("./db/conn")
const errorHandler=require("./middleware/errorHandler")
const postToFacebook=require("./controller/postToFacebook")
const authRoute=require("./routes/auth")
// EAAH4VZAfWqwUBAFf57RCOSFBuomJG7fZBSF6nnWlM7VAfmlxsPO57IWd93cCsCLBXEYBnYP2MMsLSZBDeKK0VjF63KYqpfUmIu7ZADZBeS2is0AAENZAw9kdqIhD9s3PPWtHboKmevIZATDcV4cwzt9xDfnAohYK6CwAcHmIOV9uS4rzgJDEq2v9LlYZABPNzmAZD
const PORT=8000|| process.env.PORT
const server=express();

server.use(errorHandler)
server.use(cors())
server.use(express.json());
server.use(express.static(process.cwd() + '/public'))
server.use("/api/page",pageRoute);
server.use("/api/auth",authRoute);




 
const startServer=async()=>{
    await dbConnect();
    //  postToFacebook()

    server.listen(PORT, ()=>{
        console.log("server is running")
    })
}

startServer();



