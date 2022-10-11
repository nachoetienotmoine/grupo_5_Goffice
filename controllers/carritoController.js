const db = require('../database/models');
const Products = db.Product;
const cart = db.Cart
const pagos = db.PaymentMethod
const Users = db.User;
const users_products = db.UserProducts;
const carritoController = {

    
    carrito: async (req, res) => {

        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);
        const userCart = await cart.findOne({where: {users_id: userId}});

        if (!userCart) {
            await cart.create({
                total_products: 0,
                total_price: 0,
                payment_methods_id: 2,
                users_id: userId
                });

            const cartsProducts = await cart.findOne({where: {users_id: userId}});
            const products = await Products.findAll();
            let productsWithStock = [];
            products.forEach(product => { product.stock > 0 ? productsWithStock.push(product) : "";});
            
            let cartsProductsWithStock = [];
            // cartsProducts.forEach(product => { product.stock > 0 ? cartsProductsWithStock.push(product) : "";});

            res.render("carritoVacio", { productosJ: cartsProductsWithStock, products: productsWithStock});

        }else{
            const cartsProducts = await userCart.getProducts();
            const products = await Products.findAll();
            
            if(cartsProducts.length != 0){
                let productsWithStock = [];
                products.forEach(product => { product.stock > 0 ? productsWithStock.push(product) : "";});

                let cartsProductsWithStock = [];
                cartsProducts.forEach(product => { product.stock > 0 ? cartsProductsWithStock.push(product) : "";});

                res.render("carrito", { productosJ: cartsProductsWithStock, userCart, products: productsWithStock });
            }else{
                let productsWithStock = [];
                products.forEach(product => { product.stock > 0 ? productsWithStock.push(product) : "";});

                let cartsProductsWithStock = [];
                cartsProducts.forEach(product => { product.stock > 0 ? cartsProductsWithStock.push(product) : "";});

                res.render("carritoVacio" , { productosJ: cartsProductsWithStock, products: productsWithStock });
            }
            
            
        }

        
    },

    agregar: async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);

        const existeCarrito = await cart.findOne({where: {users_id: userId}});

        if (!existeCarrito){
            await cart.create({
            total_products: 0,
            total_price: 0,
            payment_methods_id: 2,
            users_id: userId
            });

            const userCart = await cart.findOne({where: {users_id: userId}});

            await userCart.addProducts([id]);

            const cartsProducts = await userCart.getProducts();
            let productsWholeValue = 0;
            let productsTotal = 0;
            await cartsProducts.forEach((product) => 
            {productsWholeValue = productsWholeValue + product.price, productsTotal++});

            await cart.update({
                total_products: productsTotal,
                total_price: productsWholeValue
                },{
                    where: { users_id: userId }
                });



        }else {
            await existeCarrito.addProducts([id]);
            const cartsProducts = await existeCarrito.getProducts();
            let productsWholeValue = 0;
            let productsTotal = 0;
            await cartsProducts.forEach((product) => 
            {productsWholeValue = productsWholeValue + product.price, productsTotal++});

            await cart.update({
                total_products: productsTotal,
                total_price: productsWholeValue
                },{
                    where: { users_id: userId }
                });
        }
    
        res.redirect("/carrito");
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);
        const userCart = await cart.findOne({where: {users_id: userId}});
        // console.log(await cart.findAll({include: [{model: Products, as: 'Products'}]}));
        await userCart.removeProducts([id]);


        const cartsProducts = await userCart.getProducts();

        let productsWholeValue = 0;
        let productsTotal = 0;
        
        await cartsProducts.forEach((product) => 
        {productsWholeValue = productsWholeValue + product.price, productsTotal++});

        await cart.update({
            total_products: productsTotal,
            total_price: productsWholeValue
            },{
                where: { users_id: userId }
            });
    

    
        res.redirect('/carrito')
    },

    checkout:  async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);
        const userCart = await cart.findOne({where: {users_id: userId}});
        const cartsProducts = await userCart.getProducts();
        const MetodosdePago = await pagos.findAll();

        let productsWithStock = [];
        cartsProducts.forEach(product => { product.stock > 0 ? productsWithStock.push(product) : "";});

        res.render("checkout" ,  { productosJ: productsWithStock, userCart , pagos : MetodosdePago})
    },

    checkoutCompra: async (req, res) => {
        const userEmail = req.session.userLogged.email;
        let frontProducts = req.body.products;
        const totalPrice = req.body;
        let userData = await Users.findOne({where: {email: userEmail}});
        let id = userData.dataValues.id;
        id = parseInt(id);
        let productsFromDb = [];
        let userCart = await cart.findOne({where: {users_id: id}});
        let totalProductsFromDb = userCart.dataValues.total_products;
        let totalPriceFromDb = userCart.dataValues.total_price;

            for (let i = 0; i < frontProducts.length; i++){
                productsFromDb.push(await Products.findOne({where: {name: frontProducts[i]["product"].name}}))
            }

            for (let i = 0; i < frontProducts.length; i++){
                if ( productsFromDb[i].dataValues.stock > 0){
                    let multiplier = frontProducts[i]["product"].multiplier;
                    multiplier = multiplier.slice(0,multiplier.length-1);
                    multiplier = parseInt(multiplier);
                    const stockLess = productsFromDb[i].dataValues.stock - multiplier;
                    if (stockLess >= 0){
                        Products.update({
                            stock: stockLess
                        },{
                            where: {id: productsFromDb[i].dataValues.id}
                        })
                    }
                }
            }
            let productsBought = 0;
            frontProducts.forEach(() => {productsBought = productsBought + 1;})
            productsBought = totalProductsFromDb - productsBought;
            
            let priceToUpdate = totalPriceFromDb - totalPrice;
            priceToUpdate >= 0 ? "" : priceToUpdate = 0;
            productsBought >= 0 ? "" : productsBought = 0;
            await cart.update({
                total_products: productsBought,
                total_price:  priceToUpdate
                },{
                    where: { users_id: id }
                });  

            for (let i = 0; i < frontProducts.length; i++){
                await userCart.removeProducts([productsFromDb[i].dataValues.id]);
            }  

            for (let i = 0; i < frontProducts.length; i++){
                await users_products.create({
                    users_id: id,
                    product_id: productsFromDb[i].dataValues.id
                })
            }

        res.sendStatus(200);
    }
}


module.exports = carritoController;