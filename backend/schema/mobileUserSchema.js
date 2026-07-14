const mongoose = require('mongoose');

const mobileuserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type: Number
    },
    password: {
        type: String
    }
});

const mobileuserdata = new mongoose.model('mobileuser', mobileuserSchema);
module.exports = mobileuserdata;