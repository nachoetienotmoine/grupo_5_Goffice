const db = require('../database/models');
const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const Products = db.Product;
const CategoryProducts = db.ProductCategory;

const productosController = {
    ////homeee///
    index: async (req, res) => {
        
        const products = await Products.findAll()
        res.render("index", { productosJ: products })
    },
    ////detalle///
    Detalle: (req, res) => {
        res.render('detalle');
    },
    ////////
    
    listar: async (req, res) => {

        const products = await Products.findAll()
        res.render("admin/productos", { productosJ: products })
    },
    crearProductos: async (req, res) => {
        const categoryProducts = await CategoryProducts.findAll();
        res.render("admin/prodCrear", { categoryProducts: categoryProducts })
    },
    detalleProducto: async (req, res) => {
        const products = await Products.findByPk(req.params.id);

        res.render('admin/prodDetalle', {
            prodEncontrado: products

        });

    },


    crearProductosPost: async (req, res) => {
        let { name, category, description, discount, price, stock } = req.body;

        await Products.create({
            name: name,
            description: description,
            discount: discount,
            price: price,
            image: req.file.originalname,
            stock: stock,
            id_products_category: category
        });

        res.redirect('admin/productos');
    },

    editProducto: async (req, res) => {
        const products = await Products.findByPk(req.params.id);
        const categoryProducts = await CategoryProducts.findAll();
        let productImage = path.format({ root: '/ignored', dir: path.join(__dirname, '..', '/public/images'), base: 'IMG_2546.jpg' });
        res.render('admin/prodEdit', { productoEncontrado: products, productImage: productImage, categoryProducts: categoryProducts });
    },
    update: async (req, res) => {
        let { name, category, description, discount, price, stock } = req.body;
        Products.update(
            {
                name: name,
                description: description,
                discount: discount,
                price: price,
                image: req.file.originalname,
                stock: stock,
                id_products_category: category
            },
            {
                where: { id: req.params.id }
            }
        );
        res.redirect('/productos/' + req.params.id);
    },



    deleteProducto: async (req, res) => {
        Products.destroy(
            {
                where: { id: req.params.id }
            }
        )
        res.redirect("/productos")

    }
}


module.exports = productosController;
