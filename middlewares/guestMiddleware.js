function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }
    next();
    console.log(req.session.userLogged);
}

module.exports = guestMiddleware;