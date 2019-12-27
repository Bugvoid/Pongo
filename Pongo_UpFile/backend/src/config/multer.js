const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "temp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "temp", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    }
  }),
  limits: {
    filesize: 2 * 1024 * 1024
  },
  filefilter: (req, file, cb) => {
    console.log("Entrei aqui");

    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/pdf",
      "image/gif"
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  }
};
