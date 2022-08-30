const db = require('../database/models');
const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const Products = db.Product;


const carritoController = {

    carrito:
        async (req, res) => {

            const products = await Products.findAll()
            res.render("carrito", { productosJ: products })
        }
}


module.exports = carritoController;