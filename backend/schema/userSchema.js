const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type:String
    },
    email : {
        type:String
    },
    password : {
        type:String
    }
});

const userdata = new mongoose.model('user', userSchema);
module.exports = userdata;