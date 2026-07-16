const mongoose = require('mongoose');

// Define Schema for Admin Notes
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create mongoose model
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
