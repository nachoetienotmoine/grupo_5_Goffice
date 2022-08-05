const fs = require("fs");
const path = require('path');
let userJson = path.join(__dirname, '../data/users.json');
let userOl = JSON.parse(fs.readFileSync(userJson, 'utf-8'));

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie;

    for (let i = 0; i < userOl.length; i++){
        if (userOl[i].email === emailInCookie) {
            userFromCookie = userOl[i];
        }
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