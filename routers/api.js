const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  console.log();console.log();console.log(__dirname, '../public/images/');console.log();console.log();

const apiController = require('../controllers/apiController');

router.get('/users', apiController.users);
router.get('/users/:id', apiController.oneUsers);

router.get('/products/', apiController.products);
router.get('/products/:id', apiController.oneProduct);

router.get('/soldTotal', apiController.soldTotal);
router.get('/fiveMostSold', apiController.fiveMostSold);

router.post('/createProduct', upload.single('image'), apiController.createProduct);

module.exports = router;

