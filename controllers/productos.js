
<<<<<<< HEAD:controllers/productos.js
const fs = require("fs")
=======
>>>>>>> 8668d4b785ab9adfee82bb0c5b48a6d6bd55add1:controllers/product/productos.js

const productos = {
    fileName: '../data/product.json',
    getData: function () {
        return Json.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    list: (req, res) => {
        res.render("prodList")
    },
    crearProductos: (req, res) => {
        res.render("prodC")
    },
    DetalleProducto: (req, res) => {
        res.render("prodDetalle")
    },
    crearProductosPost: (req, res) => {
        res.redirect("prodC")
    },
    EditProducto: (req, res) => {
        res.render("prodDetalle")
    },

    // completar gonzalo//
    // completar nacho //
}

module.exports = productos;
// listar: (req, res) => {
    //     res.status(200).send(productosData);
    // },

    // agregarProducto: (req, res) => {
    //     res.status(201).send("se ha creado el producto");
    // },
    // borrarProducto: (req, res) => {
    //     const productoId = parseInt(req.params.id, 10);

    //     for (let i = 0; i < productosData.length ; i++) {
    //         if (productosData[i].id === productoId) {
    //             productosData.splice(i,1)
    //         }
    //     }

    //     console.log(productosData);

    //     res.send(`se ha borrado el producto con id ${productoId}`);
<<<<<<< HEAD:controllers/productos.js
    // },
=======
    // },

    list: (req, res) => {
        res.render("prodList")
    },
    crearProductos: (req, res) => {
        res.render("prodC")
    },
    DetalleProducto: (req, res) => {
        res.render("prodDetalle")
    },
    crearProductosPost: (req, res) => {
        res.redirect("prodC")
    },
    EditProducto: (req, res) => {
        res.render("prodDetalle")
    },
    deleteProducto: (req, res) => {
        let idProduct = req.params.idProduct
        res.send(idProduct)
    },
    // completar gonzalo (Gonza ya instale Method-override - >nacho)//
}

module.exports = productos;
>>>>>>> 8668d4b785ab9adfee82bb0c5b48a6d6bd55add1:controllers/product/productos.js
