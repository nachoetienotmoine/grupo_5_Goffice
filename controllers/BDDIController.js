const db = require('../database/models');
const Products = db.Product;

const BaseDeDatos = {
    
    productos: async (req, res) => {
        return res.send(await Products.findAll());
    },
    findOne: async (req, res) => {
        let product = req.body.product
        return res.send(await Products.findOne({where: {name: product}}));
    }

}

module.exports = BaseDeDatos;