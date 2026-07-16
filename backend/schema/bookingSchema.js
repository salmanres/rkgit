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
    },
    status:{
        type:String,
        enum : ['pending', 'aceepted', 'ongoing', 'completed', 'cancelled'],
        default: "pending"
    }
});

const bookingdata = new mongoose.model('booking', bookingSchema);
module.exports = bookingdata;