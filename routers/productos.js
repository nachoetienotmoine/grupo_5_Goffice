const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)



router.get('/listar', productosController.listar);
router.get("/create", productosController.crearProductos);
router.get("/:id", productosController.detalleProducto);
router.post("/", productosController.crearProductosPost);
router.get("/:id/edit", productosController.editProducto);
router.get("/delete/:idProduct", productosController.deleteProducto);
router.put("/:id/actualizar", productosController.actulizar);



module.exports = router;