const express = require('express');
const router = express.Router();


const productosController = require('../controllers/productosController');

router.get('/', productosController.Detalle);

module.exports = router;

