const CronJob = require("cron").CronJob,
  request = require("request"),
  helpers = require("../helpers/helpers"),
  config = require("../config/index"),
  port = config.rtmp_server.http.port;

const job = new CronJob(
  "*/5 * * * * *",
  function() {
    request.get("http://127.0.0.1:" + port + "/api/streams", function(
      error,
      response,
      body
    ) {
      let streams = JSON.parse(body);
      if (typeof (streams["live"] !== undefined)) {
        let live_stream = stream["live"];
        for (let stream in live_stream) {
          if (!live_stream.hasOwnProperty(stream)) continue;
          helpers.generateStreamThumbnail(stream);
        }
      }
    });
  },
  null,
  true
);

module.exports = job;
