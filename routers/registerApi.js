const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const validations = require('../middlewares/validationsRegister');
const path = require('path');

router.get('/',validations, registerController.index);

module.exports = router;