
const res = require("express/lib/response");
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
        res.render("prodCRUD")
    },
    detalleProducto: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser =>
            oneUser.id === id);
        return userFound;
    },
    crearProductosPost: (req, res) => {
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

        //

        // 	Insert them, then they got sent away to the database.
        productosJ.push(fuseData);
        fs.writeFileSync(productoFile, JSON.stringify(productosJ), 'utf-8');

        //finally, you got kicked back to products for good.
        res.redirect("prodList");
    },


    editProducto: (req, res) => {
        res.render("prodDetalle")
    },

    deleteProducto: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        res.redirect("prodList")
    },


    actualizar: function (req, res){
        res.send("actualizado");
    },

    

}


module.exports = productosController;
