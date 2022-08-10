const express = require('express');
const router = express.Router();
var { check } = require('express-validator');

const loginController = require('../controllers/loginController');


const validateLogin = [
    check('email')
          .notEmpty().withMessage('Debes completar el email').bail()
          .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
          .notEmpty().withMessage('Debes completar la contraseña').bail()
          .isLength({ min: 5 }).withMessage('La contraseña debe tener almenos 5 caracteres')    
];


router.get('/', loginController.login);
router.post('/', validateLogin, loginController.loginProcess);

module.exports = router;