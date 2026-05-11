const Note = require("../models/Note");

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(req.user);
    const createdBy = req.user.id;

    if (!title || !content || !createdBy ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const note = await Note.create({
      title,
      content,
      createdBy
    });

    res.status(201).json(note);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
    try {
      const notes = await Note.find({ createdBy: req.user.id });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getNoteById = async (req, res) => {
    try {
      const note = await Note.findById({_id: req.params.id, createdBy: req.user.id});
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const updateNote = async (req, res) => {
    req.body.updatedBy = req.user.id;
    try {
      const note = await Note.findOneAndUpdate(
          {_id: req.params.id, createdBy: req.user.id},
        req.body,
        { new: true , createdBy: req.user.id}
      );
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }k
  
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({_id: req.params.id, createdBy: req.user.id});
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { createNote, getNotes, getNoteById, updateNote, deleteNote };