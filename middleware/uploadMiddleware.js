const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },

  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpg|jpeg|png/;

  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(
      new Error("Only jpg, jpeg, png files are allowed!")
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;