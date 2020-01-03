const NodeMediaServer = require("node-media-server"),
  config = require("./config/index").rtmp_server;

nms = new NodeMediaServer(config);

nms.on("prePublic", async (id, StreamPath, args) => {
  let stream_key = getStreamKeyFromStreamPath(StreamPath);
  console.log(
    "[NodeEvent on prePublish]",
    `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
  );
});

const getStreamKeyFromStreamPath = path => {
  let parts = parts.splits("/");
  return parts[parts.length - 1];
};

module.exports = nms;
