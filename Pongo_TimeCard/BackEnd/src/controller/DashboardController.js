const TimeCard = require("../models/Timecard");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const timecard = await TimeCard.find({ user: user_id });

    return res.json(timecard);
  }
};
