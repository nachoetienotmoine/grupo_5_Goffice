const db = require('../database/models');
const Users = db.User;

async function adminMiddleware(req, res, next) {

    const usuario = req.session.userLogged;
    const admins = await Users.findAll({where: {id_roles: 1}});
    let adminValidator = false;
    admins.forEach(admin => { admin.email === usuario.email ? adminValidator = true : '';});

    if (!adminValidator) {
        return res.render("profile", {
            user: req.session.userLogged
        });
    }
    next();
}

module.exports = adminMiddleware;