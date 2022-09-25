
const express = require('express');
const router = express.Router();


const soporteController = require('../controllers/soporteController');

router.get('/ayuda', soporteController.ayudar);
router.get('/costoenvio', soporteController.enviar);
router.get('/puntoretiro', soporteController.retirar);
router.get('/devoluciones', soporteController.devolver);
router.get('/terminos', soporteController.determinar);
router.get('/privacidad', soporteController.privar);
router.get('/arrepentimiento', soporteController.arrepentir);
router.get('/contacto', soporteController.contactar);

module.exports = router;
