const routes = require("express").Router();

routes.get("/", function(req, res) {
  res.json({ teste: "pode pa" });
});

module.exports = routes;
