const express = require('express');
const router = express.Router();
var { check } = require('express-validator');
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');
const validations = require('../middlewares/validationsRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const multer = require('multer');
const path = require('path');

const validateLogin = [
  check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
  check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 5 }).withMessage('La contraseña debe tener almenos 5 caracteres')    
];

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

 

////registro///
router.get('/registro',validations,guestMiddleware, usersController.registro);
/////Registro///////


 //////////log in///////
 router.get('/login', guestMiddleware ,usersController.login);
router.post('/login',  guestMiddleware,validateLogin, usersController.loginProcess);
/////////////Login ////////////////



/////Logout //////
router.get('/logout', usersController.logout);
///////Log out///////



router.get('/', authMiddleware,usersController.users);
router.post("/", upload.single('image'), usersController.crearUsers);
router.get('/profile',authMiddleware ,usersController.profile);
router.get('/profile/Edit',authMiddleware ,usersController.profileEdit);
router.put('/profile/update/:id?', upload.single('image'), usersController.profileUpdate);
router.delete("/profile/delete/:id?", authMiddleware, usersController.deleteUser);

module.exports = router;