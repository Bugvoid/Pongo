const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controller/SessionController");
const TimeCardController = require("./controller/TimeCardController");
const DashboardController = require("./controller/DashboardController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/");
routes.post("/sessions", SessionController.store);

routes.get("/timecards", TimeCardController.index);
routes.post("/timecards", upload.single("thumbnail"), TimeCardController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/timecards/:timecard_id/booking");

module.exports = routes;
