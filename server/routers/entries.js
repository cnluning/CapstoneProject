const { Router } = require("express");
const router = Router();

router
  .route("/")
  .get((request, response) => {
    response.json({ entry: Number });
  })
  .post((request, response) => {
    response.json(request.body);
  });
module.exports = router;
