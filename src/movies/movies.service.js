const knex = require("../db/connection");

// get all movies from movies table
function listAllMovies() {
  return knex("movies");
}

//get movies if showing is true
function listMoviesThatAreShowing() {}

module.exports = { listAllMovies, listMoviesThatAreShowing };
