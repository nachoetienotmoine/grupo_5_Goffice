
const soporteController = {
    ///Ayuda///
    ayudar: (req, res) => {
        res.render("ayuda")
    },
    ///Costo-Envio///
    enviar: (req, res) => {
        res.render("costoenvio")

    },
    ///Puntos-Retiro///
    retirar: (req, res) => {
        res.render("puntosretiro")

    },    
     ///Contacto///
     contactar: (req, res) => {
        res.render("contacto")
    },
     ///Devoluciones///
    devolver: (req, res) => {
        res.render("devoluciones")

    },
    ///Terminos y condiciones///
    determinar: (req, res) => {
       res.render("terminos")

    },
    ///Privacidad///
    privar: (req, res) => {
      res.render("privacidad")

    },
    ///Arrepentimiento///
    arrepentir: (req, res) => {
     res.render("arrepentimiento")
    }
}


module.exports = soporteController;
