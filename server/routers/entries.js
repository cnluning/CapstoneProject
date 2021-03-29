const express = require("express");
const Entry = require("../models/entry");
const router = express.Router();

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

router.get("/:id", (request, response) => {
  Entry.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  Entry.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   Entry.model.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         crust: body.crust,
//         cheese: body.cheese,
//         sauce: body.sauce,
//         toppings: body.toppings
//       }
//     },
//     (error, data) => {
//       if (error) return response.sendStatus(500).json(error);
//       return response.json(request.body);
//     }
//   );
// });

module.exports = router;
