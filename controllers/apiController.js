const db = require('../database/models');
const Products = db.Product;
const CategoryProducts = db.ProductCategory;

const apiController = {
    
    products: async (req, res) => {

        let productsDb = await Products.findAll({include: "ProductCategorys"});
        let categoryDb = await CategoryProducts.findAll();
        let count = productsDb.length;
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
        console.log();
        console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();
        
        categoryDb.forEach((category) => {
            
            let sameCategory = 0;

            productsDb.forEach((product) => {product.dataValues.id_products_category === category.dataValues.id ? sameCategory++ : "";})

            countByCategory.push({
                category: category.dataValues.category,
                count: sameCategory,
        })});

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