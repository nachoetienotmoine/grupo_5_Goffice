const bcryptjs = require("bcryptjs");

const loginController = {

    index: (req, res) => {

        res.render('login');
    },


    loginProces: (req, res) => {

        res.send(req.body)
        // console.log(req.body)
        // let userToLogin = userJ.findByField("email", req.body.email);
        // if (userToLogin) {
        //     let itsOkeyThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        //     res.redirect("index");
        // }
        // res.sender("login", {
        //     errors: {
        //         email: {
        //             msg: "Las Credenciales Son Invalidas"
        //         }
        //     }
        // })
    }

}



module.exports = loginController;