const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const usersController = require('../controllers/usersController');

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



///lista usuarios/////
router.get('/users',usersController.users);
///lista usuarios/////



////todo productos/////
router.get("/productos",productosController.listar);
router.get("/productos/create", productosController.crearProductos);
router.get("/productos/:id",productosController.detalleProducto);
router.post("/productos", upload.single('image'), productosController.crearProductosPost);
router.get("/productos/:id/edit", productosController.editProducto);
router.put("/productos/:id",upload.single('image'), productosController.update);
router.delete("/productos/:id", productosController.deleteProducto);
////todo productos/////


module.exports = router;