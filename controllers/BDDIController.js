const db = require('../database/models');
const Products = db.Product;

const BaseDeDatos = {
    
    productos: async (req, res) => {

        return res.send(await Products.findAll());
    }

}

module.exports = BaseDeDatos;