const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');

// ************ multer Configuration ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });






router.get('/', authMiddleware,usersController.users);
router.post("/", upload.single('image'), usersController.crearUsers);
router.get('/profile',authMiddleware ,usersController.profile);
router.get('/profile/Edit',authMiddleware ,usersController.profileEdit);
router.put('/profile/update/:id?', upload.single('image'), usersController.profileUpdate)
module.exports = router;