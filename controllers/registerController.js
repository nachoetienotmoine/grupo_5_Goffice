

const registerController = {

    index: (req, res) => {
        res.cookie('testing', '¡Hola mundo!', {maxAge: 1000 * 30});
        res.render('registro');
    }

}

module.exports = registerController;