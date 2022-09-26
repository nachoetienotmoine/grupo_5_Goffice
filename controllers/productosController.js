const db = require('../database/models');
const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const Products = db.Product;
const CategoryProducts = db.ProductCategory;
const { validationResult } = require('express-validator');
const productosController = {
    ////homeee///
    index: async (req, res) => {
        const products = await Products.findAll()
        res.render("index", { productosJ: products })
    },
    ////detalle///
    Detalle: async (req, res) => {
        const id = parseInt(req.params.id);
        const product = await Products.findByPk(id)
        res.render('detalle', {user: product});
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
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let { name, category, description, discount, price, stock , image} = req.body;
            Products.create(
                {
                    name: name,
                    description: description,
                    discount: discount,
                    price: price,
                    image: req.file.originalname,
                    stock: stock,
                    id_products_category: category
                });
               res.redirect('/admin/productos');
        }else {
            let nameErrors = [];
            let descriptionErrors = [];
            let discountErrors = [];
            let priceErrors = [];
           

            let errorsArray = errors.array();
            errorsArray.forEach(error => {
                if (error.param == "name"){
                    nameErrors.push(error);
                }else if (error.param == "description"){
                    descriptionErrors.push(error);
                }else if (error.param == "discount"){
                    discountErrors.push(error);
                }else if (error.param == "price"){
                    priceErrors.push(error);
                }
            })
            const categoryProducts = await CategoryProducts.findAll();
            res.render('admin/prodCrear', {
                errors: errors.mapped(), old: req.body, nameErrors, descriptionErrors, discountErrors,
                                                        priceErrors, categoryProducts: categoryProducts}
               )
    }},
    editProducto: async (req, res) => {
        const products = await Products.findByPk(req.params.id);
        const categoryProducts = await CategoryProducts.findAll();
        let productImage = path.format({ root: '/ignored', dir: path.join(__dirname, '..', '/public/images'), base: 'IMG_2546.jpg' });
        res.render('admin/prodEdit', { productoEncontrado: products, productImage: productImage, categoryProducts: categoryProducts });
    },
    update: async (req, res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()){
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
                    });
                   res.redirect('/admin/productos/' + req.params.id);
            }else {
                let nameErrors = [];
                let descriptionErrors = [];
                let discountErrors = [];
                let priceErrors = [];
                let imageErrors = [];

                let errorsArray = errors.array();
                errorsArray.forEach(error => {
                    if (error.param == "name"){
                        nameErrors.push(error);
                    }else if (error.param == "description"){
                        descriptionErrors.push(error);
                    }else if (error.param == "discount"){
                        discountErrors.push(error);
                    }else if (error.param == "price"){
                        priceErrors.push(error);
                    }else if (error.param == "image"){
                        imageErrors.push(error);
                    }
                })
                const products = await Products.findByPk(req.params.id);
                const categoryProducts = await CategoryProducts.findAll();
                let productImage = path.format({ root: '/ignored', dir: path.join(__dirname, '..', '/public/images'), base: 'IMG_2546.jpg' });
                res.render('admin/prodEdit', {
                    errors: errors.mapped(), old: req.body, nameErrors, descriptionErrors, discountErrors,
                                                            priceErrors, imageErrors,
                    productoEncontrado: products, productImage: productImage, categoryProducts: categoryProducts
                });
            }
    },
    deleteProducto: async (req, res) => {
        Products.destroy(
            {
                where: { id: req.params.id }
            }
        )
        res.redirect("/admin/productos")
    }
}
module.exports = productosController;