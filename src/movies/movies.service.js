const knex = require("../db/connection");

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

module.exports = { listAllMovies, listMoviesThatAreShowing, read };
