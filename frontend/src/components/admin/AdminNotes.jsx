import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AdminNotes() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Fetch all notes from the backend API
    const fetchNotes = async () => {
        try {
            const res = await axios.get('http://localhost:3500/get-notes');
            setNotes(res.data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load notes");
        }
    };

    // Handle note submission
    const handleAddNote = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3500/add-note', { title, content });
            setTitle('');
            setContent('');
            toast.success("Note added successfully!");
            fetchNotes(); // Refresh notes list
        } catch (err) {
            console.error(err);
            toast.error("Failed to save note");
        }
    };

    // Handle note deletion by note ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3500/delete-note/${id}`);
            toast.success("Note deleted successfully!");
            fetchNotes(); // Refresh notes list
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete note");
        }
    };

    // Load notes when component mounts
    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-primary">Admin Notes & Reminders</h2>
            <div className="row">
                {/* Form to add a new note */}
                <div className="col-md-4 mb-4">
                    <form onSubmit={handleAddNote} className="card p-3 shadow-sm border-0 bg-light">
                        <h5 className="mb-3 text-secondary">Add New Note</h5>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Note Title" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea 
                                className="form-control" 
                                placeholder="Write details..." 
                                rows="4" 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" className="btn btn-warning w-100 fw-bold">Save Note</button>
                    </form>
                </div>

                {/* Display list of existing notes */}
                <div className="col-md-8">
                    <div className="row">
                        {notes.length === 0 ? (
                            <div className="col-12">
                                <p className="text-muted text-center py-4 bg-light rounded border">No notes found. Create one to get started!</p>
                            </div>
                        ) : (
                            notes.map(note => (
                                <div className="col-md-6 mb-3" key={note._id}>
                                    <div className="card h-100 shadow-sm border-0 border-start border-warning border-3">
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <h5 className="card-title text-dark">{note.title}</h5>
                                                <p className="card-text text-secondary" style={{ whiteSpace: 'pre-line' }}>{note.content}</p>
                                            </div>
                                            <div className="mt-3">
                                                <small className="text-muted d-block mb-3">
                                                    {new Date(note.createdAt).toLocaleString()}
                                                </small>
                                                <button className="btn btn-outline-danger btn-sm px-3" onClick={() => handleDelete(note._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNotes;
