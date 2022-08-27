const db = require('../database/models');
const Users = db.User;
const productos = db.Product
async function userLoggedMiddleware(req, res, next) {
    const allProducts = await productos.findAll();
    res.locals.allProducts = allProducts;

    res.locals.isLogged = false;
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie;
    if (emailInCookie != null){
        userFromCookie = await Users.findOne({where: {email: emailInCookie}});
    }
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
// cambiar , por error //
    next();
}
module.exports = userLoggedMiddleware;