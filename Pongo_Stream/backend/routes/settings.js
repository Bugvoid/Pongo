const express = require("express"),
  route = express.Router(),
  User = require("../database/Schema").User,
  shorid = require("shortid");

route.get(
  "/stream_key",
  require("connect-ensure-login").ensureLoggedIn(),
  (req, res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (!err) {
        res.json({
          stream_key: user.stream_key
        });
      }
    });
  }
);

route.post(
  "/stream_key",
  require("connect-ensure-login").ensureLoggedIn(),
  (req, res) => {
    User.findOneAndUpdate(
      {
        email: req.user.email
      },
      {
        stream_key: shorid.generate()
      },
      {
        upsert: true,
        new: true
      },
      (err, user) => {
        if (!err) {
          res.json({
            stream_key: user.stream_key
          });
        }
      }
    );
  }
);
