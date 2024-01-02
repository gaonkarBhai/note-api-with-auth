const mongoose = require("mongoose");

const noteSachema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title should be provided"],
      minlength: [5, "can not less then 5 character"],
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: [10, "can not less then 10 character"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSachema);
