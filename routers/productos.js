const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos')


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)



router.get('/list', productosController.list);
router.get("/create", productosController.crearProductos);
router.get("/:id", productosController.DetalleProducto)
router.post("/", productosController.crearProductosPost);
router.get("/:id/edit", productosController.EditProducto);
// completar nacho //
// completar  gonzalo//

module.exports = router;