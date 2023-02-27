const router = require("express").Router({ mergeParams: true });
const moviesController = require("./movies.controller");
// import for methodNotAllowed will go here when errors folder is created
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(moviesController.list).all(methodNotAllowed)

module.exports = router;
