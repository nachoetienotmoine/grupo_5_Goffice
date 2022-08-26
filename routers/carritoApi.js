const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware ,carritoController.index);

module.exports = router;