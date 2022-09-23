
const soporteController = {
    ///Ayuda///
    ayudar: (req, res) => {
        res.render("ayuda")
    },
    ///Costo-Envio///
    enviar: (req, res) => {
        res.render("costoenvio")

    },
     ///Contacto///
     contactar: (req, res) => {
        res.render("contacto")
    }


}


module.exports = soporteController;
