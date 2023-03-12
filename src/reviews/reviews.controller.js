const reviewsService = require("./reviews.service");
const asyncErrorBourdary = require("../errors/asyncErrorsBoundary");

async function listAllReviews(req, res, next) {
  const data = await reviewsService.listAllReviews();
  res.json({ data });
}

async function reviewExists(req, res, next) {
  // NEEDS A READ FUNCTION?
  const review = await reviewsService.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, error: "Review cannot by found." });
}

function read(req, res, next) {
  const { review: data } = res.locals;
  res.json({ data });
}

async function destroy(req, res, next) {
  const { review } = res.locals;
  await reviewsService.delete(review.review_id);
  res.sendStatus(204);
}

module.exports = {
  list: [asyncErrorBourdary(listAllReviews)],
  read: [asyncErrorBourdary(reviewExists), read],
  delete: [asyncErrorBourdary(reviewExists), asyncErrorBourdary(destroy)],
};
