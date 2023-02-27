const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorsBoundary");

async function listAllMovies(req, res, next) {
  const { is_showing } = req.query;
  if (is_showing) {
    // console.log("is_showing", is_showing);
    const data = await moviesService.listMoviesThatAreShowing();
    return res.json({ data });
  }
  const data = await moviesService.listAllMovies();
  return res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(listAllMovies),
};
