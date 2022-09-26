const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const {check} = require('express-validator');
const validateProducts = [
  check('name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 4, max: 18 }).withMessage('el nombre debe ser entre 4 y 18 caracteres').bail(),
  check('description')
        .notEmpty().withMessage('Debes completar la descripción').bail()
        .isLength({ min: 20}).withMessage('El campo debe tener al menos 20 caracteres').bail(),
  check('discount')
        .notEmpty().withMessage('Debes completar el descuento').bail()
        .isInt({ max: 99}).withMessage('El descuento no puede ser mayor al 100%').bail(),
  check('price')
        .notEmpty().withMessage('Debes completar el precio').bail()
        .isInt().withMessage('Debe ser un valor numérico').bail()
        .isLength({ min: 4}).withMessage('El precio debe tener al menos 4 valores').bail(),
];
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
router.post("/productos", upload.single('image'), validateProducts ,productosController.crearProductosPost);
router.get("/productos/:id/edit", productosController.editProducto);
router.put("/productos/:id",upload.single('image'), validateProducts, productosController.update);
router.delete("/productos/:id", productosController.deleteProducto);
////todo productos/////
module.exports = router;