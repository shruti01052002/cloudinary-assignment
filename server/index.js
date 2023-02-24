require("dotenv").config();

const express = require('express');
const connectDB = require("./db/connect");
const user = require("./models/Users");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");
const { json } = require("express");
const Users = require("./models/Users");
const { url } = require("./cloudinary/cloudinary");

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true, limit:"50mb"}));
let findResult = [];

app.get("/", (req, res)=>{
    res.send("Welcome on this page");
})

app.post("/", async(req, res)=>{
    const {image, title, desc, vid} = req.body;
    const uploadedImage = await cloudinary.uploader.upload(image,
    {
        upload_preset: 'unsigned_upload',
        public_id: `${title}avatar`,
        allowed_formats: ['png', 'jpeg']
    },
    function(error, result) {
        if(error) {console.log(error);}
        console.log(result);
        // res.status(json(result));
    }    
    );
    try{
        res.status(200).json(uploadedImage[url]);
        console.log(uploadedImage.url);
        const user = new Users({image:uploadedImage.url, title, desc, vid});
        findResult = await Users.find();
        console.log(findResult);
        await user.save();
        console.log(user);
        console.log("Working");
    } catch(err) {
        console.log(err);
    }
})


const start = async()=>{
    try{
        await connectDB();
        app.listen(port, _=>console.log(`app is listening on ${port}`));
    } catch(error){
        console.log(error);
    }
}
start();

module.exports = findResult;
