
const fs = require("fs")

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
    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' ')); 
        return true;
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
    // },
