require("dotenv").config();
const mongoose = require('mongoose');

const uri = "mongodb://shruti:0TjiGE8VMVODIcgx@ac-pxs9ptm-shard-00-00.7704xf4.mongodb.net:27017,ac-pxs9ptm-shard-00-01.7704xf4.mongodb.net:27017,ac-pxs9ptm-shard-00-02.7704xf4.mongodb.net:27017/UserAPI?ssl=true&replicaSet=atlas-103mc4-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = () =>{
    console.log("connectdb");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }, 
    () => {
        console.log("mongdb is connected");
      }
    );
};

module.exports = connectDB;