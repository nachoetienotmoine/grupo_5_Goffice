const fs = require("fs");
const path = require('path');
const bcrypt = require('bcryptjs');
var { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;

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
    loginProcess: async (req, res) => {
        let errors = validationResult(req);
        let esEmail = false;
        let userPassword = req.body.password;
        let esPassword = false;

        let userId;

        let elEmail = await Users.findAll();

        // for (let i = 0; i < usersJ.length; i++){
        //     if (usersJ[i].email === userEmail) {
        //         esEmail = true;
        //         userId = usersJ[i];
        //         bcrypt.compareSync(userPassword, userId.password) ? esPassword = true : false;
        //     }
        // }

        // if (errors.isEmpty() && esEmail && esPassword) {
        //     //delete userId.password;
        //     req.session.userLogged = userId;

        //     if (req.body.remember_user) {
        //         res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60});
                
        //     }

        //     res.redirect('/users/profile');

        // }else {
        //     //res.render('login', { errors: errors.mapped(), old: req.body });
        //     res.render('login', {errors: errors.mapped(), old: req.body, email: {
        //         msg: 'Las credenciales son inválidas'
        //     }});
        // }
        
    }

}



module.exports = loginController;