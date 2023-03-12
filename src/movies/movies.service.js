const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// get all movies from movies table
function listAllMovies() {
  return knex("movies");
}

//get movies if showing is true, is_showing=true`
function listMoviesThatAreShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .distinct("m.*")
    .where({ "mt.is_showing": true });
}

function read(movieId) {
  return knex("movies as m").select("*").where({ movie_id: movieId }).first();
}

function listTheatersPlaying(movieId) {
  // join of theaters and movies_theaters
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("*")
    .where({ "mt.movie_id": movieId });
}

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
});

function listReviewsWithCritics(movieId) {
  // join of reviews and critics
  return (
    knex("reviews as r")
      .join("critics as c", "c.critic_id", "r.critic_id")
      .select("*")
      .where({ "r.movie_id": movieId })
      // our nested configuration object is critic
      .then((data) =>
        data.map((review) => {
          return addCritic(review);
        })
      )
  );
}

module.exports = {
  listAllMovies,
  listMoviesThatAreShowing,
  read,
  listTheatersPlaying,
  listReviewsWithCritics,
};
