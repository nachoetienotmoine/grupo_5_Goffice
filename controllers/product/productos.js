

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
        res.render("productos", { producto : product})
    },
    crearProductos: (req, res) => {
        res.render("prodCRUD",)
    },


    DetalleProducto: (req, res) => {
        res.render("prodCrud",)
    },
    crearProductosPost: (req, res) => {
        res.redirect("prodCRUD",)
    },
    EditProducto: (req, res) => {
        res.render("prodCrud")
    },
    deleteProducto: (req, res) => {
        let idProduct = req.params.idProduct
        res.send(idProduct)
    },
    // completar gonzalo (Gonza ya instale Method-override - >nacho)//
}

module.exports = productos;