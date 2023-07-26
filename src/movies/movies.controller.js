const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorsBoundary");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

async function listAllMovies(req, res, next) {
  const { is_showing } = req.query;
  if (is_showing) {
    const data = await moviesService.listMoviesThatAreShowing();
    return res.json({ data });
  }
  const data = await moviesService.listAllMovies();
  return res.json({ data });
}

function read(req, res, next) {
  const data = res.locals.movie;
  res.json({ data });
}

async function listTheatersPlaying(req, res, next) {
  const { movieId } = req.params;
  const data = await moviesService.listTheatersPlaying(movieId);
  res.json({ data });
}

async function listReviewsWithCritics(req, res, next) {
  const { movieId } = req.params;
  const data = await moviesService.listReviewsWithCritics(movieId);
  // array called data, with object elements
  //for every object filled with review keys
  // add a new key called critic, with an object value of the matching critcs table
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(listAllMovies),
  read: [asyncErrorBoundary(movieExists), read],
  listTheatersPlaying: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(listTheatersPlaying),
  ],
  listReviewsWithCritics: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(listReviewsWithCritics),
  ],
};
