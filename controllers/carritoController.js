const db = require('../database/models');
const Products = db.Product;
const cart = db.Cart

const carritoController = {

    
    carrito: async (req, res) => {
        const products = await Products.findAll()
        res.render("carrito", { productosJ: products })
    },

    agregar: async (req, res) => {
        const id = req.params.id;
        const userId = req.session.userLogged.dataValues.id;

        const existeCarrito = await cart.findOne({where: {users_id: userId}});

        if (!existeCarrito){
            cart.create({
                total_products: 0,
                total_price: 0,
                payment_methods_id: 2,
                users_id: userId,
                Products: [
                    {carts_id:userId,
                    products_id: id}
                ]
            }, {
                include: 'Products'
            });
        }
    },

    checkout:  async (req, res) => {
        res.render("checkout")
    }
}


module.exports = carritoController;