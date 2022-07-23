const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
const bcryptjs = require("bcryptjs");

const loginController = {
    
    users: (req, res) => {
     
        
        const usersFile = path.join(__dirname, '../data/users.json');
        const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
        res.render("login", { usersJ: usersJ })
    },

    index: (req, res) => {

        res.render('login');
    },
    loginProces: (req, res) => {
        console.log(usersJ)
        console.log(req.body.email)
        res.render(req.body.email)

        let userToLogin = usersJ.findByField("email", req.body.email);
        if (userToLogin) {
            let isOkeyThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkeyThePassword) {
                return res.send ('ok puedes ingresar')
            }
        }
        res.sender("login", {
            errors: {
                email: {
                    msg: "Las Credenciales Son Invalidas"
                }
            }
        })
    }

}



module.exports = loginController;