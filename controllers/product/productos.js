const productos = {
    listar: (req, res) => {
        res.status(200).send("lista de productos");
    },
    agregarProducto: (req, res) => {
        res.status(201).send("se ha creado el producto");
    },
    borrarProducto: (req, res) => {
        const productoId = req.params.id;

        res.send(`se ha borrado el producto con id ${productoId}`);
    },
}

module.exports = productos;