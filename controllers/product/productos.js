const productosData = require('../data/productosData');

const productos = {
    listar: (req, res) => {
        res.status(200).send(productosData);
    },
    agregarProducto: (req, res) => {
        res.status(201).send("se ha creado el producto");
    },
    borrarProducto: (req, res) => {
        const productoId = parseInt(req.params.id, 10);

        for (let i = 0; i < productosData.length ; i++) {
            if (productosData[i].id === productoId) {
                productosData.splice(i,1)
            }
        }

        console.log(productosData);

        res.send(`se ha borrado el producto con id ${productoId}`);
    },
}

module.exports = productos;