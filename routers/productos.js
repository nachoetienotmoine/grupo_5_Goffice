const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController')
const multer = require('multer');
const path = require('path');



const userLoginMiddleWare = require('../middlewares/userLogin');

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
router.get("/create", /*userLoginMiddleWare,*/productosController.crearProductos);
router.get("/:id", productosController.detalleProducto);
router.post("/", /*userLoginMiddleWare,*/ upload.single('image'), productosController.crearProductosPost);
router.get("/:id/edit", /*userLoginMiddleWare,*/ productosController.editProducto);
router.put("/:id", /*userLoginMiddleWare,*/ upload.single('image'), productosController.update);
router.delete("/:id", /*userLoginMiddleWare,*/ productosController.deleteProducto);



module.exports = router;