const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    category : {
        type: String
    },
    checkin:{
        type: String
    },
    checkout:{
        type:String
    },
    guestcount:{
        type:Number
    },
    mobile:{
        type:Number
    },
    name:{
        type:String
    }
});

const bookingdata = new mongoose.model('booking', bookingSchema);
module.exports = bookingdata;