const Note = require("../models/Note");

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content
    });

    res.status(201).json(note);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getNoteById = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };  

  const updateNote = async (req, res) => {
    try {
      const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteNote = async (req, res) => {
    try {
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
          }  
      const note = await Note.findByIdAndDelete(req.params.id);
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.json({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { createNote, getNotes, getNoteById, updateNote, deleteNote };