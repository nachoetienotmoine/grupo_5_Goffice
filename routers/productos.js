const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')
const multer = require('multer');
const path = require('path');

// ************ multer Configuration ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)



router.get('/', productosController.listar);
router.get("/create", productosController.crearProductos);
router.get("/:id", productosController.detalleProducto);
router.post("/",  upload.single('image'), productosController.crearProductosPost);
router.get("/:id/edit", productosController.editProducto);
router.put("/:id", productosController.update);
router.delete("/:id", productosController.deleteProducto);



module.exports = router;