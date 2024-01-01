const noteSachema = require("../model/note");


const getAllNotes = async (req, res) => {
  try {
    const data = await noteSachema.find({}).lean();
    res.status(200).json({ data, success: true, message: "All tasks fetched" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in fetching the notes", success: false });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(404).json({ message: "feild must be provided" });
    const note = await noteSachema.create({ title, content });
    return res.status(200).json({
      note,
      message: "Note created",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in create note", success: false });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id)
      return res
        .status(404)
        .json({ message: "id must be provided", success: false });
    const note = await noteSachema.findById({ _id });
    return res
      .status(200)
      .json({ note, message: "Note fetched", success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in fetching the note", success: false });
  }
};
const updateNote = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id)
      return res
        .status(404)
        .json({ message: "id must be provided", success: false });
    const note = await noteSachema.findByIdAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      message: "Note updated",
      note,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in fetching the note", success: false });
  }
};
const deleteNote = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id)
      return res
        .status(404)
        .json({ message: "id must be provided", success: false });
    const note = await noteSachema.findByIdAndDelete({ _id });
    return res
      .status(200)
      .json({ message: "Note deleted", note, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in deleting the note", success: flase });
  }
};

module.exports = { getAllNotes, createNote, getSingleNote, updateNote, deleteNote };
