const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)



router.get('/', productosController.listar);
router.get("/create", productosController.crearProductos);
router.get("/:id", productosController.detalleProducto);
router.post("/", productosController.crearProductosPost);
router.get("/:id/edit", productosController.editProducto);
router.put("/:id", productosController.editProducto);
router.delete("/:id", productosController.deleteProducto);


module.exports = router;