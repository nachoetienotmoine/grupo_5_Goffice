const express = require('express');
const router = express.Router();
const productosController = require('../controllers/product/productos')

router.get('/', productosController.listar);
router.post('/', productosController.agregarProducto);
router.delete('/:id', productosController.borrarProducto)

module.exports = router;