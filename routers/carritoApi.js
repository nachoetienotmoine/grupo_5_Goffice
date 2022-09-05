const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware ,carritoController.carrito);
router.post('/agregar/:id', authMiddleware, carritoController.agregar)
router.get('/checkout',authMiddleware ,carritoController.checkout);
router.delete('/delete/:id', authMiddleware, carritoController.delete)

module.exports = router;