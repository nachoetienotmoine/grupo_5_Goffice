const fs = require("fs");
const path = require('path');
const bcrypt = require('bcryptjs');

var { validationResult } = require('express-validator');
const usersFile = path.join(__dirname, '../data/users.json');
const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

const loginController = {
    
    users: (req, res) => {
     
        const usersFile = path.join(__dirname, '../data/users.json');
        const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
        res.render("index", { usersJ: usersJ }) //para enviar la info de users al home y mostrar info del usuario
    },

    login: (req, res) => {
        
        res.render('login', {email: {
            msg: ''
        }});
    },
    loginProcess: (req, res) => {
        let errors = validationResult(req);
        let userEmail = req.body.email;
        let esEmail = false;
        let userPassword = req.body.password;
        let esPassword = false;

        let userId;

        for (let i = 0; i < usersJ.length; i++){
            if (usersJ[i].email === userEmail) {
                esEmail = true;
                userId = usersJ[i];
                bcrypt.compareSync(userPassword, userId.password) ? esPassword = true : false;
            }
        }

        if (errors.isEmpty() && esEmail && esPassword) {
            res.redirect('/', { usersJ: usersJ });

        }else {
            //res.render('login', { errors: errors.mapped(), old: req.body });
            res.render('login', {errors: errors.mapped(), old: req.body, email: {
                msg: 'Las credenciales son inválidas'
            }});
        }
        
    }

}



module.exports = loginController;