const db = require('../database/models');
const Products = db.Product;
const cart = db.Cart

const carritoController = {

    
    carrito: async (req, res) => {
        const products = await Products.findAll()
        res.render("carrito", { productosJ: products })
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

    checkout:  async (req, res) => {
        res.render("checkout")
    }
}


module.exports = carritoController;