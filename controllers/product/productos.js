

const productos = {
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