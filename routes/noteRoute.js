const { getAllNotes, getSingleNote, createNote, updateNote, deleteNote } = require("../controllers/noteController");

const router = require("express").Router();

router.get("/",getAllNotes);
router.get("/:id",getSingleNote);
router.post("/",createNote);
router.patch("/",updateNote);
router.delete("/",deleteNote);

module.exports = router;