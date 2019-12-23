const User = require("../models/User");
const Timecard = require("../models/Timecard");

module.exports = {
  async index(req, res) {
    const { date, user_id } = req.query;

    const timecard = await Timecard.find({ date: date, user: user_id });

    return res.json(timecard);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { date, hours } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "USER DOES NOT EXIST" });
    }

    const timecard = await Timecard.create({
      user: user_id,
      thumbnail: filename,
      date,
      hours: hours.split(",").map(hours => hours.trim())
    });

    return res.json(timecard);
  },

  async update(req, res) {
    const user = await User.findById(user_id);

    const timecard = await Timecard.updateOne({
      user: user_id,
      thumbnail: filename,
      date,
      hours: hours.split(",").map(hours => hours.trim())
    });
    return res.json(timecard);
  }
};
