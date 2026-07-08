const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    category : {
        type : String
    },
    capacity : {
        type : Number
    },
    price : {
        type : Number
    },
    image : {
        type:String,
        default : "https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/cf5eb258d999a53b72b7b3121acb6d7860ee21ae-1920x1280.jpg?w=1280&auto=format&dpr=2"
    }
});

const roomsData = new mongoose.model('room', roomsSchema);
module.exports = roomsData;