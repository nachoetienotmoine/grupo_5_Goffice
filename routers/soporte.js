
const express = require('express');
const router = express.Router();


const soporteController = require('../controllers/soporteController');

router.get('/ayuda', soporteController.ayudar);
router.get('/costoenvio', soporteController.enviar);
router.get('/contacto', soporteController.contactar);

module.exports = router;
