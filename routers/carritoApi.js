const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoController');
const authMiddleware = require('../middlewares/authMiddleware');

///carrito///
router.get('/',authMiddleware ,carritoController.carrito);
router.post('/agregar/:id', authMiddleware, carritoController.agregar);
router.delete('/delete/:id', authMiddleware, carritoController.delete);
///carrito///


/// check out ////
router.get('/checkout',authMiddleware ,carritoController.checkout);
router.post('/checkout',authMiddleware ,carritoController.checkoutCompra);
/// check out ///


module.exports = router;