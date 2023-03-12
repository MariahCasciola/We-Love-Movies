const router = require("express").Router({ mergeParams: true });
const reviewsController = require("./reviews.controller");

router
  .route("/:reviewId")
  .get(reviewsController.read)
  .delete(reviewsController.delete);

router.route("/").get(reviewsController.list);

module.exports = router;
