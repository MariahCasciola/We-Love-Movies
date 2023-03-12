const knex = require("../db/connection");

function listAllReviews() {
  return knex("reviews").select("*");
}

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

module.exports = {
  listAllReviews,
  read,
  delete: destroy,
};
