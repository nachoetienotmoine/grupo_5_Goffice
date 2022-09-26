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
        let { name, category, description, discount, price, stock , image} = req.body;

        await Products.create({
            name: name,
            description: description,
            discount: discount,
            price: price,
            image: req.file.originalname,
            stock: stock,
            id_products_category: category
        });

        res.redirect('/admin/productos');
    },

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
                // Products.update(
                //     {
                //         name: name,
                //         description: description,
                //         discount: discount,
                //         price: price,
                //         image: req.file.originalname,
                //         stock: stock,
                //         id_products_category: category
                //     },
                //     {
                //         where: { id: req.params.id }
                //     });
                //    res.redirect('/admin/productos/' + req.params.id);
                console.log("ANASHE :D");
            }else {
                let nameErrors = [];
                // let lastNameErrors = [];
                // let emailNameErrors = [];
                // let passwordNameErrors = [];
                // let phoneNumberNameErrors = [];
                // let imageNameErrors = [];
                // let genderNameErrors = [];
    
                let errorsArray = errors.array();
                errorsArray.forEach(error => {
    
                    if (error.param == "name"){
                        nameErrors.push(error);
                    }
                    // else if (error.param == "lastname"){
                    //     lastNameErrors.push(error);
                    // }else if (error.param == "email"){
                    //     emailNameErrors.push(error);
                    // }else if (error.param == "password"){
                    //     passwordNameErrors.push(error);
                    // }else if (error.param == "phonenumber"){
                    //     phoneNumberNameErrors.push(error);
                    // }else if (error.param == "image"){
                    //     imageNameErrors.push(error);
                    // }else if (error.param == "gender"){
                    //     genderNameErrors.push(error);
                    // }
                })
    
                const products = await Products.findByPk(req.params.id);
                const categoryProducts = await CategoryProducts.findAll();
                let productImage = path.format({ root: '/ignored', dir: path.join(__dirname, '..', '/public/images'), base: 'IMG_2546.jpg' });

                res.render('admin/prodEdit', {
                    errors: errors.mapped(), old: req.body, nameErrors,
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
