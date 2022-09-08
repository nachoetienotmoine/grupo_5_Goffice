
const express = require('express');
const router = express.Router();


const soporteController = require('../controllers/soporteController');

router.get('/', soporteController.ayudar);
router.get('/', soporteController.contactar);

module.exports = router;
