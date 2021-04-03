const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");

router.post("/", (request, response) => {
  const newEntry = new Entry.model(request.body);
  newEntry.save((err, entry) => {
    return err ? response.sendStatus(500).json(err) : response.json(entry);
  });
});

router.get("/", (request, response) => {
  Entry.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

module.exports = router;
