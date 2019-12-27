const express = require("express"),
  route = express.Router();
passport = require("passport");

route.get("/"),
  require("connect-ensure-login").ensureLoggedOut(),
  (req, res) => {
    res.render("login", {
      user: null,
      error: {
        email: req.flash("email"),
        password: req.flash("password")
      }
    });
  };

route.post(
  "/",
  passport.authenticate("localLogin", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

module.exports = route;


