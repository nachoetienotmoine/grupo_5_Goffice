const bcrypt = require('bcryptjs');
const db = require('../database/models');
var { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;

const usersController = {


    users: async (req, res) => {
        const usersJ = await Users.findAll();
        res.render("users", { usersJ: usersJ })
    },
    crearUsers: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let { firstname, lastname, email, password, phonenumber, gender } = req.body;

            let passwordHashed =  bcrypt.hashSync(req.body.password, 10);
    
            await Users.create({
                first_name: firstname,
                last_name: lastname,
                email: email,
                password: passwordHashed,
                phone_number: phonenumber,
                gender: gender,
                image: req.file.originalname,
                id_roles: 2
                
            });

            res.redirect('/users/login');
        }else {
            
            let firstNameErrors = [];
            let lastNameErrors = [];
            let emailNameErrors = [];
            let passwordNameErrors = [];
            let phoneNumberNameErrors = [];
            let imageNameErrors = [];
            let genderNameErrors = [];

            let errorsArray = errors.array();
            errorsArray.forEach(error => {

                if (error.param == "firstname"){
                    firstNameErrors.push(error);
                }else if (error.param == "lastname"){
                    lastNameErrors.push(error);
                }else if (error.param == "email"){
                    emailNameErrors.push(error);
                }else if (error.param == "password"){
                    passwordNameErrors.push(error);
                }else if (error.param == "phonenumber"){
                    phoneNumberNameErrors.push(error);
                }else if (error.param == "image"){
                    imageNameErrors.push(error);
                }else if (error.param == "gender"){
                    genderNameErrors.push(error);
                }
            })

            
            res.render('registro', {
                errors: errors.mapped(), old: req.body, firstNameErrors, lastNameErrors, emailNameErrors,
                                                        passwordNameErrors, phoneNumberNameErrors,imageNameErrors,
                                                        genderNameErrors
                                                        
            });
        }

        
    },
    profile: (req, res) => {

        res.render("profile", {
            user: req.session.userLogged
        });
    },
    profileEdit: (req, res) => {

        res.render("profileEdit", {
            user: req.session.userLogged
        });
    },
    profileUpdate: async (req, res) => {
        let { name, lastname, phonenumber, gender } = req.body;
        Users.update(
            {
                first_name: name,
                last_name: lastname,
                phone_number: phonenumber,
                gender: gender,
                image: req.file.originalname
            },
            {
                where: { id: req.params.id }
            }
        );
        res.redirect('/users/profile');
    },
    deleteUser: async (req, res) => {
        Users.destroy(
            {
                where: { id: req.params.id }
            }
        )
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect("/")

    }
    ////// register /////
    ,
    registro: (req, res) => {
        res.render('registro');
    }
    ///// log in /////

    , login: (req, res) => {
        res.render('login', {
            email: {
                msg: ''
            }
        });
    },
    loginProcess: async (req, res) => {
        let errors = validationResult(req);
        let esEmail = false;
        let userPassword = req.body.password;
        let esPassword = false;
        let elEmail = await Users.findOne({ where: { email: req.body.email } });
        elEmail != null ? esEmail = true : '';
        if (esEmail) {
            bcrypt.compareSync(userPassword, elEmail.password) ? esPassword = true : false;
        }
        if (errors.isEmpty() && esEmail && esPassword) {
            //delete userId.password;
            req.session.userLogged = elEmail;
            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (2005475700 * 670) * 670 });
            }
            res.redirect('/users/profile');
        } else {
            //res.render('login', { errors: errors.mapped(), old: req.body });
            res.render('login', {
                errors: errors.mapped(), old: req.body, email: {
                    msg: 'Las credenciales son inválidas'
                }
            });
        }
    }

    /////Log out////
    ,
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }


}


module.exports = usersController;
// ... //