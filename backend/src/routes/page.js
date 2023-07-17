const express=require("express")
const path=require("path")
const verifyAuth=require("../middleware/verifyAuth")
const multer =require("multer")
const router=express.Router();

const storage =  multer.diskStorage({
    destination: 'public/files/',
    filename: function(req, file, callback) {
      // Preserve the original file extension
      console.log(file)
      if(file){
        const ext = path.extname(file.originalname);
        callback(null, file.fieldname + '-' + Date.now() + ext);
      }else{
        callback(null,null)
      }
     
    }
  });


const upload = multer({ storage: storage,
fileFilter:(req,file,cb)=>{
  const fileSize=parseInt(req.headers['content-length'])
  if(file){
    if( fileSize<=4194304 && file.mimetype=="image/jpeg" || file.mimetype=="image/png"){
      cb(null,true)
    }else{
      cb(null,null)
    }
  }
}});

router.use('/addPost',upload.single('img'));
router.use('/editPost',upload.single('img'));
router.use(verifyAuth)

const { getPost,addPost,deletePost ,editPost} =require("../controller/page");
router.route("/getPost").post(getPost);
router.route("/addPost").post(addPost);
router.route("/deletePost").post(deletePost)
router.route("/editPost").post(editPost);

module.exports=router