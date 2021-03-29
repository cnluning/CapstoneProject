const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    text: String
  },
  { timestamps: true }
);

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
