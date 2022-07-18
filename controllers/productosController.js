

const fs = require("fs");
const path = require('path');
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));

const productosController = {
    fileName: './data/product.json',
     getData: function () {
         return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));

     },
     generateId: function () {
         let allUsers = this.findAll();
    let lastUser = allUsers.pop();
        if (lastUser) {
             return lastUser.id + 1;
         }
        return 1;
    },
    findAll: function () {
       return this.getData();
     },
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
		const fuseData = { id: productosJ.length + 1,
			name: name, price: price, discount: discount, category: category, description: description, stock: stock};
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
        res.render('prodEdit', {productoEncontrado:productoEncontrado});
    },

    update: function(req, res) {
        let productId = parseInt(req.params.id, 10);
        for (let i = 0; i < productosJ.length; i++){
    
        if (productosJ[i].id === productId) {
            productosJ[i].id = productId;
            productosJ[i].name = req.body.name;
            productosJ[i].description = req.body.description;
            productosJ[i].price = req.body.price;
            productosJ[i].discount = req.body.discount;
            
    productosJ[i].category = req.body.category;
                productosJ[i].stock = req.body.stock;
            }    
    
    
            res.send("update");
          res.redirect("/prodList" + productId);
        }
    },

    deleteProducto: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        res.redirect("prodList")
    }





}


module.exports = productosController;
