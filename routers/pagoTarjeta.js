
const express = require('express');
const router = express.Router();


const pagoTarjetaController = require('../controllers/pagoTarjetaController');

router.get('/', pagoTarjetaController.route);


module.exports = router;