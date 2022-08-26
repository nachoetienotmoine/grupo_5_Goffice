const { check } = require('express-validator');
module.exports = [
    check('firstname').notEmpty().withMessage('Tienes que escribir un Nombre'),
    check('lastname').notEmpty().withMessage('Tienes que escribir un Apellido'),
	check('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    check('phonenumber').notEmpty().withMessage('Tienes que escribir un numero de telefono'),
    check('gender').notEmpty().withMessage('Tienes que escribir un genero'),
    check('image').notEmpty().withMessage('Tienes que subir una imagen'),
];