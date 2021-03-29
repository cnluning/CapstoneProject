const express = require("express");
const router = express.Router();
const Archive = require("../models/archive");
const Entry = require("../models/entry");

// Order routes to demonstrate relationships
router.post("/", (req, res) => {
  const newArchive = new Archive.model({});

  const entryIds = req.body.entries.map(entry => {
    const newEntry = new Entry.model({ ...entry, archive: newArchive._id });
    newEntry.save();
    return newEntry._id;
  });

  newArchive.entries = entryIds;
  newArchive.notes = req.body.notes;

  newArchive.save((error, data) => {
    return error ? res.sendStatus(500).json(error) : res.json(data);
  });
});

router.get("/:id", (request, response) => {
  // Request parameters (params) are defined in the route, queryParams are provided after the url behind a ? and & in key=value pairs
  const params = request.params;
  const query = request.query;
  if (query.hasOwnProperty("raw") && query.raw === "true") {
    Archive.model.findById(params.id, (error, data) => {
      return error ? response.sendStatus(500).json(error) : response.json(data);
    });
  } else {
    Archive.model
      .findById(params.id)
      .populate("entries")
      .exec((error, data) => {
        return error
          ? response.sendStatus(500).json(error)
          : response.json(data);
      });
  }
});

router.get("/", (request, response) => {
  const query = request.query;
  if (query.hasOwnProperty("raw") && query.raw === "true") {
    Archive.model.find({}, (error, data) => {
      return error ? response.sendStatus(500).json(error) : response.json(data);
    });
  } else {
    Archive.model
      .find({})
      .populate("entries")
      .exec((error, data) => {
        return error
          ? response.sendStatus(500).json(error)
          : response.json(data);
      });
  }
});

// router.put("/:id", (request, response) => {
//   const data = request.body;
//   Archive.model.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         delivery: data.delivery,
//         notes: data.notes
//       }
//     },
//     (error, data) => {
//       data.entries.forEach(entry => {
//         Entry.model.findByIdAndUpdate(
//           entry._id,
//           {
//             $setOnInsert: {
//               crust: pizza.crust,
//               cheese: pizza.cheese,
//               sauce: pizza.sauce,
//               toppings: pizza.toppings,
//               order: pizza.order
//             }
//           },
//           { upsert: true, new: true },
//           error => {
//             return response.sendStatus(500).json(error);
//           }
//         );
//       });

//       return error ? response.sendStatus(500).json(error) : res.json(data);
//     }
//   );
// });

router.delete("/:id", (request, response) => {
  Archive.model.findByIdAndDelete(request.params.id, {}, (error, data) => {
    if (error) response.sendStatus(500).json(error);

    Entry.model
      .deleteMany()
      .where("_id")
      .in(data.entries)
      .exec(error => {
        if (error) return response.sendStatus(500).json(error);
      });

    // Customer.model.findByIdAndRemove(data.customer, error => {
    //   if (error) return response.sendStatus(500).json(error);
    // });

    return response.json(data);
  });
});

module.exports = router;
