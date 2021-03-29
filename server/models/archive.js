const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Demonstrate linking vs embedding
const archiveSchema = new mongoose.Schema({
  entries: [{ type: Schema.Types.ObjectId, ref: "Entry" }]
});

const Archive = mongoose.model("Archive", archiveSchema);

module.exports = {
  model: Archive,
  schema: archiveSchema
};
