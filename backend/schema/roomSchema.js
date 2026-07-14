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
    description:{
        type:String
    },
    image : {
        type:String,
    }
});

const roomsData = new mongoose.model('room', roomsSchema);
module.exports = roomsData;