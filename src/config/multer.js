import multer from "multer";
import path from "path";
import crypto from "crypto";

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "tmp/uploads/");
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          cb(err);
        } else {
          const fileName = `${hash.toString("hex")}-${file.originalname}`;
          cb(null, fileName);
        }
      });
    },
  }),
};

const multerConfig = {
  dest: "tmp/uploads/",
  storage: storageTypes.local,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};

export default multerConfig;
