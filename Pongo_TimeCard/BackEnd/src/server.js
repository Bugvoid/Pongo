const express = require("express");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(
  "mongodb+srv://root:root@cluster0-huzkm.mongodb.net/pongo?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(3333);
