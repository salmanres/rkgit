const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    mobile : {
        type: Number
    },
    address : {
        type : String
    },
    gender : {
        type : String,
        enum : ['male', 'female'],
        required : true
    }
});

const userData = new mongoose.model("user", userSchema);
module.exports = userData;