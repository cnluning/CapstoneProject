// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// router.get("/", (request, response) => {
//   User.find({}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// router.post("/newUser", async (request, response) => {
//   try {
//     const newSub = new User(request.body);
//     await newSub.save();
//     const newList = await User.find({});
//     response.status(200).send(newList);
//   } catch (err) {
//     response.status(500).send("Error at POST user/new");
//     console.log(err, "Error at POST user/new");
//   }
// });

// router.put("/login", async (request, response) => {
//   const { Email, Password } = request.body;
//   try {
//     if (!Email || !Password) {
//       response.status(200).send({ message: "Login info missing" });
//     } else {
//       const newList = await User.find({ Email, Password });
//       if (newList.length === 0) {
//         response.status(200).send({ message: "User does not exist" });
//       } else {
//         response.status(200).send(newList);
//       }
//     }
//   } catch (err) {
//     response.status(500).send("Error at POST user/new");
//     console.log(err, "Error at POST user/new");
//   }
// });
