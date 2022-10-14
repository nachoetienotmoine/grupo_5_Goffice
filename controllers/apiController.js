const db = require('../database/models');
const Products = db.Product;
const CategoryProducts = db.ProductCategory;
const Users = db.User;
const usersProducts = db.UserProducts;

const apiController = {

    users: async (req, res) => {
        const users = await Users.findAll();
        const userQuantity = users.length;
        const allUsers = [];

        users.forEach((user) => {
            let userInfo = {
              id: user.id,
              name: user.first_name + " " + user.last_name,
              email: user.email,
              detail: `http://localhost:3000/api/users/${user.id}`
            }
            
            allUsers.push(userInfo);
        })

        let userData = {
            count: userQuantity,
            users: allUsers
        }
        
        return res.send(JSON.stringify(userData));
    },

    oneUsers: async (req, res) => {
        const id = req.params.id;
        const user = await Users.findOne({where:{id:id}});
        let image = user.dataValues.image;
        image = encodeURIComponent(image.trim());
        let userInfo = {
            id: user.dataValues.id,
            first_name: user.dataValues.first_name,
            last_name: user.dataValues.last_name,
            email: user.dataValues.email,
            phone_number: user.dataValues.phone_number,
            gender: user.dataValues.gender,
            image: user.dataValues.image,
            URL: `http://localhost:3000/images/users/${image}`
        }



        return res.send(JSON.stringify(userInfo));
    },
    
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
            detail: `http://localhost:3000/api/products/${product.dataValues.id}`
            })});

        let productsData = {
            count: count,
            categoryCount: categoryDb.length,
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
    },
    soldTotal: async (req, res) => {
        const usersExchanges = await usersProducts.findAll({include:"Users"}); 
        let soldTotal = usersExchanges.length;
        let exchanges = [];
        let users = [];

        // usersExchanges.forEach(async (exchange) => {
        //     const product = await Products.findByPk(exchange.product_id);
        //     exchanges.push({users_id: exchange.users_id, product_id: exchange.product_id, productName: product.dataValues.name });
        //     users.push({
        //         id: exchange.Users.dataValues.id,
        //         firstName: exchange.Users.dataValues.first_name,
        //         lastName: exchange.Users.dataValues.last_name
        //     });
            
        // })

        for (let i = 0; i < usersExchanges.length; i++){
            const product = await Products.findByPk(usersExchanges[i].product_id);
            exchanges.push({users_id: usersExchanges[0].users_id, product_id: usersExchanges[i].product_id, productName: product.dataValues.name });
            users.push({
                id: usersExchanges[i].Users.dataValues.id,
                firstName: usersExchanges[i].Users.dataValues.first_name,
                lastName: usersExchanges[i].Users.dataValues.last_name
            });
        }

        let soldTotalData = {
            usersExchanges: exchanges,
            users: users, 
            totalExchanges: soldTotal
        }

        return res.send(JSON.stringify(soldTotalData));
    }
}

module.exports = apiController;