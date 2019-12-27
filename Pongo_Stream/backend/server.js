const express = require("express"),
  Session = require("express-session"),
  bodyParse = require("body-parser"),
  mongoose = require("mongoose"),
  middleware = require("connect-ensure-login"),
  FileStore = require("session-file-store")(Session),
  config = require("./config/index"),
  flash = require("connect-flash"),
  passport = require("./auth/passport");

app.use(passport.initialize());
app.use(passport.session());
app = express();

mongoose.connect(
  "mongodb+srv://root:root@cluster0-huzkm.mongodb.net/api_facebook?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("public"));
app.use(flash());
app.use(require("cookie-parser"));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));

app.use(
  Session({
    store: new FileStore({
      path: "./server/sessions"
    }),
    secret: config.server.secret,
    maxAge: Date().now + 60 * 1000 * 30
  })
);

app.use("/login", require("./routes/login"));
app.use("register", require("./routes/register"));

app.get("*", middleware.ensureLoggedIn(), (req, res) => {
  res.render("/index");
});

app.listen(5555, () => console.log("App Listening"));
