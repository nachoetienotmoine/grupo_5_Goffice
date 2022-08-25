const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;

const usersController = {

    users: async (req, res) => {
        const usersJ = await Users.findAll();
        res.render("users", { usersJ: usersJ })
    } ,
    crearUsers: async (req, res) => {

        let {firstname, lastname, email, password, phonenumber, gender} = req.body;

        let passwordHashed = await bcrypt.hashSync(req.body.password, 1);

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

        res.redirect('login');
    },
    profile: (req, res) => {

        res.render("profile", {
            user: req.session.userLogged
        });
    }
   
}
module.exports= usersController;
// ... //