const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  text: String
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = {
  model: Entry,
  schema: entrySchema
};
