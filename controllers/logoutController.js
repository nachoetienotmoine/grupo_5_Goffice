const homeController = {

    logout: (req, res) => {
        req.session.destroy();
        console.log(req.session);
        return res.redirect('/');
    }

}

module.exports = homeController;