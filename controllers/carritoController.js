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

            res.render("carritoVacio", { productosJ: cartsProducts, products });

        }else{
            const cartsProducts = await userCart.getProducts();
            const products = await Products.findAll();
            if(cartsProducts.length != 0){
                res.render("carrito", { productosJ: cartsProducts, userCart, products });
            }else{
               
                res.render("carritoVacio" , { productosJ: cartsProducts, products });
            }
            
            
        }

        
    },

    agregar: async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);

        const existeCarrito = await cart.findOne({where: {users_id: userId}});

        // const cartExists = await cart.findOne({where: {users_id: 4}});
        // console.log(await cartExists.addProducts([5,5,5]));

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

        res.render("checkout" ,  { productosJ: cartsProducts, userCart , pagos : MetodosdePago})
    },

    checkoutCompra: async (req, res) => {
        let { name, lastname, phonenumber, gender } = req.body;
        const userEmail = req.session.userLogged.email;
        let products;

        if (req.body.products != undefined){
            products = req.body.products;
        }
        
        if (products != undefined){
            let userData = await Users.findOne({where: {email: userEmail}});
            let id = userData.dataValues.id;
            id = parseInt(id);
            let productsFromDb = [];
            console.log();console.log();console.log();
            for (let i = 0; i < products.length; i++){
                productsFromDb.push(await Products.findOne({where: {name: products[i]}}))
            }
            // console.log(productsFromDb[0].dataValues.id);
            for (let i = 0; i < products.length; i++){
                await users_products.create({
                    users_id: id,
                    product_id: productsFromDb[i].dataValues.id
                })
            }
            console.log();console.log();console.log();
            
        }
        res.redirect('/');
    }
}


module.exports = carritoController;