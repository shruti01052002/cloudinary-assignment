const mongoose = require('mongoose');
// const { video, image } = require('../cloudinary/cloudinary');

const userSchema = new mongoose.Schema({
    image: {
        type:String,
        required:[true, "Thumbnail must be provided."]
    },
    title: {
        type:String,
        required:[true, "Title must be Provided."]
    },
    desc: {
        type:String,
        required:[true, "Description must be Provided."]
    },
    vid: {
        type:String,
        required:[true, "Video must be Provided."]
    }
});
module.exports = mongoose.model('User', userSchema);