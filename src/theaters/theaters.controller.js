const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorsBoundary");

async function listAllTheaters(req, res, next) {
  const data = await theatersService.listAllTheaters();
  return res.json({ data});
}

module.exports = {
  list: asyncErrorBoundary(listAllTheaters),
};
