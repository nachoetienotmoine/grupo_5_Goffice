

const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));

const Products = db.Product;
const CategoryProducts = db.ProductCategory;

const productosController = {

    listar: async (req, res) => {
        
        const products = await Products.findAll()
        res.render("prodList", { productosJ: products })
    },
    crearProductos: async (req, res) => {
        const categoryProducts = await CategoryProducts.findAll();
        res.render("admin/prodCrear", {categoryProducts: categoryProducts})
    },
    detalleProducto: async (req, res) => {
            const products = await Products.findByPk(req.params.id);

                res.render('admin/prodDetalle', {
                    prodEncontrado: products

                });

        },


    crearProductosPost: async (req, res) => {
        let {name, category, description, discount, price, stock} = req.body;
        
        await Products.create({
            name: name,
            description: description,
            discount: discount,
            price: price,
            image: req.file.originalname,
            stock: stock,
            id_products_category: category
        });

        res.redirect('/prodList');
    },

    editProducto: async (req, res) => {
        const products = await Products.findByPk(req.params.id);
        const categoryProducts = await CategoryProducts.findAll();
        let productImage = path.format({root: '/ignored', dir: path.join(__dirname, '..', '/public/images') , base: 'IMG_2546.jpg'});
        res.render('admin/prodEdit', { productoEncontrado: products, productImage: productImage, categoryProducts: categoryProducts });
    },

    update: (req, res) => {
		const id = parseInt(req.params.id);
		const name = req.body.name;
		const price = parseInt(req.body.price);
		const discount = req.body.discount;
		const category = req.body.category;
		const description = req.body.description;
        const stock = req.body.stock;
        const image = req.file.originalname;
		const productToUpdate = productosJ.filter(product => product.id === id);

		productToUpdate[0].name = name;
		productToUpdate[0].price = price;
		productToUpdate[0].discount = discount;
		productToUpdate[0].category = category;
		productToUpdate[0].description = description;
        productToUpdate[0].stock = stock;
        productToUpdate[0].image = image;

		productosJ[id-1] = productosJ[id-1] = productToUpdate[0];

		fs.writeFileSync(productoFile, JSON.stringify(productosJ), 'utf-8');
		


		res.redirect('/productos/' + id);
	},

    deleteProducto: (req, res) => {
        const productId = parseInt(req.params.id, 10);
        const productoPaBorra = productosJ.filter(product => product.id !== productId);

       fs.writeFileSync(productoFile, JSON.stringify(productoPaBorra), 'utf-8');

res.redirect("/productos")
        // const newArray = productosJ.map((productosJ, productId) => productosJ.id === productId)

        // console.log(newArray);
    }

}


module.exports = productosController;
