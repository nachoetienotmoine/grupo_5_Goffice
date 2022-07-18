

const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));

const productosController = {

    listar: (req, res) => {
        res.render("prodList", { productosJ: productosJ })
    },
    crearProductos: (req, res) => {
        res.render("prodCrear")
    },
    detalleProducto:
        (req, res) => {
            const productId = parseInt(req.params.id, 10);
            let productoEncontrado;

            for (let i = 0; i < productosJ.length; i++) {
                if (productosJ[i].id === productId) {
                    productoEncontrado = productosJ[i];
                }
            }

            if (!productoEncontrado) {
                res.status(404).send("No se encuentra el producto");
            } else {
                res.render('prodDetalle', {
                    prodEncontrado: productoEncontrado,
                    prodcuto: productosJ,

                });
            }

        },


    crearProductosPost: (req, res) => {

        const name = req.body.name;
        const price = req.body.price;
        const discount = req.body.discount;
        const category = req.body.category;
        const description = req.body.description;
        const stock = req.body.stock;

        // got them fused in a Object Literal;
        const fuseData = {
            id: productosJ.length + 1,
            name: name, price: price, discount: discount, category: category, description: description, stock: stock
        };
        // 	Insert them, then they got sent away to the database.
        productosJ.push(fuseData);
        fs.writeFileSync(productoFile, JSON.stringify(productosJ), 'utf-8');

        //finally, you got kicked back to products for good.
        res.redirect('prodList');
    },

    editProducto: (req, res) => {
        const productId = parseInt(req.params.id, 10);
        const productoEncontrado = productosJ.filter(product => product.id === productId);

        console.log(productoEncontrado);
        res.render('prodEdit', { productoEncontrado: productoEncontrado });
    },

    update: (req, res) => {
		const id = parseInt(req.params.id);
		const name = req.body.name;
		const price = parseInt(req.body.price);
		const discount = req.body.discount;
		const category = req.body.category;
		const description = req.body.description;
		const productToUpdate = productosJ.filter(product => product.id === id);

		productToUpdate[0].name = name;
		productToUpdate[0].price = price;
		productToUpdate[0].discount = discount;
		productToUpdate[0].category = category;
		productToUpdate[0].description = description;

		productosJ[id-1] = productosJ[id-1] = productToUpdate[0];

		fs.writeFileSync(productoFile, JSON.stringify(productosJ), 'utf-8');
		


		res.redirect('/productos/' + id);
	},

    deleteProducto: (req, res) => {
        const productId = parseInt(req.params.id, 10);
        const productoPaBorra = productosJ.filter(product => product.id === productId);

        console.log(productoPaBorra);

        const newArray = productosJ.map((productosJ, productId) => productosJ.id === productId)

        console.log(newArray);
    }

}


module.exports = productosController;
