const express = require('express');
const router = express.Router();
const productosController = require('../controllers/product/productos')


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)



router.get('/', productosController.list);
router.get("/create", productosController.crearProductos);
router.get("/:id", productosController.DetalleProducto)
router.post("/", productosController.crearProductosPost);
router.get("/:id/edit", productosController.EditProducto);
router.delete("/delete/:idProduct", productosController.deleteProducto);
// completar  gonzalo//

module.exports = router;