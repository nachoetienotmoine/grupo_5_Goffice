const db = require('../database/models');
const Products = db.Product;
const Users = db.User;
const BaseDeDatos = {
    
    productos: async (req, res) => {
        return res.send(await Products.findAll());
    },
    findOne: async (req, res) => {
        let product = req.body.product
        return res.send(await Products.findOne({where: {name: product}}));
    },
    findOneEmail: async (req, res) => {
        let userEmail = req.body.userEmail
        let dbResponse = await Users.findOne({where: {email: userEmail}});

        if (dbResponse === null){
            dbResponse = {"response":"400"}
        }
        
        return res.send(dbResponse);
    }

}

module.exports = BaseDeDatos;