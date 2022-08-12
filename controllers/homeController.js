const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));



const homeController = {

    index: (req, res) => {
        const productoFile = path.join(__dirname, '../data/product.json');
        const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));
        res.render("index", { productosJ: productosJ })
    }

}

module.exports = homeController;