const db = require('../database/models');
const Products = db.Product;
const cart = db.Cart
const apiController = {
    
    products: async (req, res) => {

        let productsDb = await Products.findAll({include: "ProductCategorys"});
        let count = 0;
        let countByCategory = [];
        let products = [];
        let relations = [];

        for (let i = 0; i < productsDb.length; i++){
            let product = await Products.findByPk(productsDb[i].dataValues.id,{include: "Carts", where:{products_id: productsDb[i].dataValues.id}});
            
            if(product.dataValues.Carts[0] != undefined){
                if (product.dataValues.id === product.dataValues.Carts[0].dataValues.carts_products.dataValues.products_id){
                    relations.push(product.dataValues.Carts[0].dataValues.carts_products.dataValues);
                }
            }

        }
        console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();
        console.log(relations);
        console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();

        productsDb.forEach((product) => {count++, countByCategory.push({
            id: product.dataValues.id,
            name: product.dataValues.name,
            category: product.dataValues.ProductCategorys
        })})

        productsDb.forEach((product) => {

        let relationsProduct = null;
        
        for(let i = 0; i < relations.length; i++){
            product.dataValues.id === relations[i].products_id ? relationsProduct = relations[i]: "";
        }

        products.push({
            id: product.dataValues.id,
            name: product.dataValues.name,
            description: product.dataValues.description,
            relations: relationsProduct,
            })});

        let productsData = {
            count: count,
            countByCategory: countByCategory,
            products: products
        }

        return res.send(productsData);
    }
}

module.exports = apiController;