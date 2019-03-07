import multer from "multer";
//@multer configurations
const MIME_TYPES = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/public/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    cb(null, `${name + Date.now()}.${extension}`);
  }
});

module.exports = multer({ storage }).any("images");
