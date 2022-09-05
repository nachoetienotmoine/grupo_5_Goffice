const db = require('../database/models');
const Products = db.Product;
const cart = db.Cart

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

            res.render("carritoVacio", { productosJ: cartsProducts });

        }else{
            const cartsProducts = await userCart.getProducts();

            if(cartsProducts.length != 0){
                res.render("carrito", { productosJ: cartsProducts, userCart });
            }else{
                res.render("carritoVacio");
            }
            
            
        }

        
    },

    agregar: async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.dataValues.id);

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
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.session.userLogged.id);
        const userCart = await cart.findOne({where: {users_id: userId}});
        // console.log(await cart.findAll({include: [{model: Products, as: 'Products'}]}));
        await userCart.removeProducts([id]);
    },

    checkout:  async (req, res) => {
        res.render("checkout")
    }
}


module.exports = carritoController;