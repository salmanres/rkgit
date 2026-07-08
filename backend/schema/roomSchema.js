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
    }
});

const roomsData = new mongoose.model('room', roomsSchema);
module.exports = roomsData;