const reviewsService = require("./reviews.service");
const asyncErrorBourdary = require("../errors/asyncErrorsBoundary");
const hasValidProperties = require("../utils/has-Valid-Properties");

async function listAllReviews(req, res, next) {
  const data = await reviewsService.listAllReviews();
  res.json({ data });
}

async function reviewExists(req, res, next) {
  const review = await reviewsService.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: "Review cannot be found." });
}

function read(req, res, next) {
  const { review: data } = res.locals;
  res.json({ data });
}

const validProperties = ["content", "score"];

async function update(req, res, next) {
  const updatedReview = {
    ...res.locals.review,
    ...req.body.data,
    updated_at: new Date(Date.now()).toISOString(),
  };
  const data = await reviewsService.update(updatedReview);
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
  update: [
    asyncErrorBourdary(reviewExists),
    hasValidProperties(...validProperties),
    asyncErrorBourdary(update),
  ],
  delete: [asyncErrorBourdary(reviewExists), asyncErrorBourdary(destroy)],
};
