const fs = require("fs");
const path = require('path');
var { validationResult } = require('express-validator');


const loginController = {
    
    users: (req, res) => {
     
        
        const usersFile = path.join(__dirname, '../data/users.json');
        const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
        res.render("index", { usersJ: usersJ }) //para enviar la info de users al home y mostrar info del usuario
    },

    index: (req, res) => {

        res.render('login');
    },
    loginProcess: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            res.redirect('/');

        }else {
        
            res.render('login', { errors: errors.mapped(), old: req.body });
        }
        
    }

}



module.exports = loginController;