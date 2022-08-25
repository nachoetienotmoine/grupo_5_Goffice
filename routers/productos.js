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


// router.post('/', productosController.agregarProducto);
// router.delete('/:id', productosController.borrarProducto)




router.get("/create", authMiddleware, productosController.crearProductos);
router.get("/:id", productosController.detalleProducto);
router.post("/", authMiddleware, upload.single('image'), productosController.crearProductosPost);
router.get("/:id/edit", authMiddleware, productosController.editProducto);
router.put("/:id", authMiddleware, upload.single('image'), productosController.update);
router.delete("/:id", authMiddleware, productosController.deleteProducto);



module.exports = router;