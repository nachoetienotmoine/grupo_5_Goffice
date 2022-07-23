const bcryptjs = require("bcryptjs");

const loginController = {

    index: (req, res) => {

        res.render('login');
    },


    loginProces: (req, res) => {
        let userToLogin = userJ.findByField("email", req.body.email);
        if (userToLogin) {
            let itsOkeyThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            return res.redirect("index");
        }
        return res.sender("login", {
            errors: {
                email: {
                    msg: "Las Credenciales Son Invalidas"
                }
            }
        })
    }

}



module.exports = loginController;