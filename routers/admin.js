const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');

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






router.get("/productos", authMiddleware,productosController.listar);
router.get("/productos/create", authMiddleware,productosController.crearProductos);
router.get("/productos/:id", authMiddleware,productosController.detalleProducto);
router.post("/productos", authMiddleware,upload.single('image'), productosController.crearProductosPost);
router.get("/productos/:id/edit", authMiddleware,productosController.editProducto);
router.put("/productos/:id", authMiddleware,upload.single('image'), productosController.update);
router.delete("/productos/:id", authMiddleware,productosController.deleteProducto);



module.exports = router;