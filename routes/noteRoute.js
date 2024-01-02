const { getAllNotes, getSingleNote, createNote, updateNote, deleteNote } = require("../controllers/noteController");
const { requireSignIn } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/", requireSignIn,getAllNotes);
router.get("/:id", requireSignIn, getSingleNote);
router.post("/", requireSignIn,createNote);
router.patch("/:id", requireSignIn,updateNote);
router.delete("/:id", requireSignIn,deleteNote);

module.exports = router;