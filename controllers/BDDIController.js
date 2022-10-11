const db = require('../database/models');
const Products = db.Product;
const Users = db.User;
const BaseDeDatos = {
    
    productos: async (req, res) => {
        let products = await Products.findAll();
        let productsWithStock = [];
        products.forEach(product => { product.stock > 0 ? productsWithStock.push(product) : "";});
        return res.send(productsWithStock);
    },
    findOne: async (req, res) => {
        let product = req.body.product
        return res.send(await Products.findOne({where: {name: product}}));
    },
    findOneEmail: async (req, res) => {
        let userEmail = req.body.userEmail;
        let dbResponse = await Users.findOne({where: {email: userEmail}});

        if (dbResponse === null){
            dbResponse = {"response":"200"}
        }
        
        return res.send(dbResponse);
    },
    lastProductAdded: async (req, res) => {
        let lastProduct = [0,0]
        let allProducts = await Products.findAll();
        await allProducts.forEach((product) => {product.id > lastProduct[0] ? lastProduct[1] = product: "";});
        return res.send(lastProduct);
    }

}

module.exports = BaseDeDatos;