const express = require('express');
const router = express.Router();


const BaseDeDatos = require('../controllers/BDDIController');

router.get('/', BaseDeDatos.productos);

module.exports = router;

