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
        let URL = [];

        for (let i = 0; i < productsDb.length; i++){
            let product = await Products.findByPk(productsDb[i].dataValues.id,{include: "Carts", where:{products_id: productsDb[i].dataValues.id}});
            
            if(product.dataValues.Carts.length > 0){
                if (product.dataValues.id === product.dataValues.Carts[0].dataValues.carts_products.dataValues.products_id){
                    relations.push(product.dataValues.Carts[0].dataValues.carts_products.dataValues);
                }
        
            }

        }
        categoryDb.forEach((category) => {
            
            let sameCategory = 0;

            productsDb.forEach((product) => {product.dataValues.id_products_category === category.dataValues.id ? sameCategory++ : "";})

            countByCategory.push({
                category: category.dataValues.category,
                count: sameCategory,
        })});

        productsDb.forEach((product) => {
            
        let relationsProduct = [];

        for(let i = 0; i < relations.length; i++){
            product.dataValues.id === relations[i].products_id ? relationsProduct.push({carts_products:relations[i]}) : "";
        }

        products.push({
            id: product.dataValues.id,
            name: product.dataValues.name,
            description: product.dataValues.description,
            relations: relationsProduct,
            detail: `http://localhost:3000/detalle/${product.dataValues.id}`
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