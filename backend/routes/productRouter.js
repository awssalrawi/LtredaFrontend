const express = require('express');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const { createProduct } = require('../controllers/productController');
const { requireSignIn, restrictTo } = require('../controllers/authController');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'));
  },
  filename: function (req, file, cb) {
    //  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortid.generate() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post(
  '/products/create',
  requireSignIn,
  upload.array('ProductPicture'),
  createProduct
);

module.exports = router;
