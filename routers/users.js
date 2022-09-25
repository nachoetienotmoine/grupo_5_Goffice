const express = require('express');
const router = express.Router();
var { check, body } = require('express-validator');
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
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')    
];


function isImage(filename) {
  let extension = (path.extname(filename)).toLowerCase();
  switch (extension) {
      case '.jpg':
          return true;
      case '.jpeg':
          return true;
      case  '.png':
          return true;
      case '.gif':
          return true;
      default:
          return false;
  }
}          


const validateRegister = [
  check('firstname')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 2}).withMessage('el nombre debe tener al menos 2 caracteres').bail(),
  check('lastname')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({ min: 2}).withMessage('el apellido debe tener al menos 2 caracteres').bail(),
  check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail(),
  check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 8}).withMessage('la contraseña debe tener al menos 8 caracteres').bail()
        .matches(/\d/).withMessage('Debe contener un valor numérico').bail()
        .matches(/(?=.*?[A-Z])/).withMessage('Debe contener una mayúscula').bail()
        .matches(/(?=.*?[.#?!@$%^&*-])/).withMessage('Debe contener un caracter especial ( #, ?, !, @, $, %, ^, &, *, -, )"').bail(),
  check('phonenumber')
        .notEmpty().withMessage('debes completar con un número de teléfono').bail()
        .isLength({ min: 6, max: 18 }).withMessage('El número de teléfono debe ser entre 6 y 18 caracteres').bail(),
  check('gender')
        .notEmpty().withMessage('debes completar el sexo').bail()
        .isLength({ min: 4, max: 6 }).withMessage('el sexo debe ser entre 4 y 6 caracteres').bail(),
          
        

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
router.get('/registro',validateRegister,guestMiddleware, usersController.registro);
/////Registro///////


 //////////log in///////
 router.get('/login', guestMiddleware ,usersController.login);
router.post('/login',  guestMiddleware,validateLogin, usersController.loginProcess);
/////////////Login ////////////////



/////Logout //////
router.get('/logout', usersController.logout);
///////Log out///////



///usuarios///
router.post("/", upload.single('image'),validateRegister, usersController.crearUsers);
router.get('/profile',authMiddleware ,usersController.profile);
router.get('/profile/Edit',authMiddleware ,usersController.profileEdit);
router.put('/profile/update/:id?', upload.single('image'), usersController.profileUpdate);
router.delete("/profile/delete/:id?", authMiddleware, usersController.deleteUser);
/////usuarios////
module.exports = router;