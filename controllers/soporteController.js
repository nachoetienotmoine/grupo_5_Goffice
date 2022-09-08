
const soporteController = {
    ///Ayuda///
    ayudar: (req, res) => {
        res.render("ayuda")
    },
     ///Contacto///
     contactar: (req, res) => {
        res.render("contacto")
    }


}


module.exports = soporteController;
