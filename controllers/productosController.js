
const fs = require("fs");
const path = require('path');
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));
const productosController = {
    fileName: './data/product.json',
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll: function () {
        return this.getData();
    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1
        }
        return 1;
    },
    listar: (req, res) => {
        res.render("prodList", { productosJ: productosJ })
    },
    crearProductos: (req, res) => {
        res.render("prodCRUD")
    },
    detalleProducto: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser =>
            oneUser.id === id);
        return userFound;
    },
    crearProductosPost: (req , res) => {

        // I read inputs and then store them in variables.
        const name = req.body.name;
        const price = req.body.price;
        const discount = req.body.discount;
        const category = req.body.category;
        const description = req.body.description;


        // got them fused in a Object Literal;
        const fuseData = {
            id: productosJ.length + 1,
            name: name, price: price, discount: discount, category: category, description: description
        };

        
        // 	Insert them, then they got sent away to the database.
        products.push(fuseData);
        fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
        console.log(req.file.image, req.body.image);
        //finally, you got kicked back to products for good.
        res.redirect('/prodList');
    },

    editProducto: (req, res) => {
        res.render("prodDetalle")
    },

deleteProducto: function (id) {
    let allProducts = this.findAll();
    let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
    return true;
},

    // completar gonzalo//

}
console.log(productosController.crearProductosPost({ name: "nelson", category: "pèrron", price: 3535466 }))

module.exports = productosController;
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
