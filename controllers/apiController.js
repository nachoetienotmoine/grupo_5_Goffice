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
            let userCart = product.dataValues.Carts;

            if (userCart.length > 0){
                userCart.forEach((cart) => {relations.push(cart.dataValues.carts_products.dataValues)});
                
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

        relations.forEach((relation) => {product.dataValues.id === relation.products_id ? relationsProduct.push({carts_products:relation}) : "";})

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

        return res.send(JSON.stringify(productsData));
    },
    oneProduct: async (req, res) => {
        let id = parseInt(req.params.id);
        let product = await Products.findByPk(id,{include: "Carts"});
        let fieldPerProduct = [];
        let productRelations = [];
        let userProductsRelation = await product.getUserProducts();
        let userCart = product.dataValues.Carts;

        fieldPerProduct.push({
            id: product.dataValues.id,
            name: product.dataValues.name,
            description: product.dataValues.description,
            price: product.dataValues.price,
            discount: product.dataValues.discount,
            image: product.dataValues.image,
            stock: product.dataValues.stock,
            id_products_category: product.dataValues.id_products_category
        });

        if (userCart.length > 0){
            userCart.forEach((cart) => {productRelations.push({carts_products: cart.dataValues.carts_products.dataValues,})});
            
        }

        if (userProductsRelation.length > 0){
            userProductsRelation.forEach((product) => { productRelations.push({users_products: product.dataValues});})
        }

        let OneProduct = {
            productData: fieldPerProduct,
            relations: productRelations,
            URL: `http://localhost:3000/images/${product.dataValues.image}`
        }

        return res.send(JSON.stringify(OneProduct));
    }
}

module.exports = apiController;