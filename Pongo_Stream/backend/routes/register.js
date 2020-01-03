const express = require("express"),
  route = express.Router(),
  passport = require("passport");

route.get(
  "/",
  require("connect-ensure-login").ensureLoggedOut(),
  (req, res) => {
    res.render("register", {
      user: null,
      errors: {
        username: req.flash("username"),
        email: req.flash("email")
      }
    });
  }
);

route.post(
  "/",
  require("connect-ensure-login").ensureLoggedOut(),
  passport.authenticate("localRegister", {
    successRedirect: "/",
    failureRedirect: "/register",
    failureFlash: true
  })
);

module.exports = route;
