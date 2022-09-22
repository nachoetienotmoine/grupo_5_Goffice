const express = require('express');
const router = express.Router();


const BaseDeDatos = require('../controllers/BDDIController');

router.get('/', BaseDeDatos.productos);
router.post('/findOne', BaseDeDatos.findOne);
router.post('/findOneEmail', BaseDeDatos.findOneEmail);

module.exports = router;

