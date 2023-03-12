const router = require("express").Router({ mergeParams: true });
const moviesController = require("./movies.controller");
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

// add validator for movie Ids?
router
  .route("/:movieId/reviews", moviesController.movieExists, reviewsRouter)
  .get(moviesController.listReviewsWithCritics);

router
  .route("/:movieId/theaters", moviesController.movieExists, theatersRouter)
  .get(moviesController.listTheatersPlaying)
  .all(methodNotAllowed);

router.route("/").get(moviesController.list).all(methodNotAllowed);

router.route("/:movieId").get(moviesController.read).all(methodNotAllowed);

module.exports = router;
