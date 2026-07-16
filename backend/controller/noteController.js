const Note = require('../schema/noteSchema');

// Controller function to create a new admin note
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).send("Title and content are required");
        }
        const note = await Note.create({ title, content });
        res.status(201).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

// Controller function to fetch all admin notes sorted by latest
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

// Controller function to delete an admin note by ID
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        res.status(200).send("Note deleted successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

module.exports = { createNote, getNotes, deleteNote };
