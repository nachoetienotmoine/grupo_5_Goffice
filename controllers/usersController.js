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
    },
    profileEdit: (req, res) => {

        res.render("profileEdit", {
            user: req.session.userLogged
        });
    },
    profileUpdate: async (req, res) => {
        let {name, lastname, phonenumber, gender} = req.body;
        Users.update(
            {
                first_name: name,
                last_name: lastname,
                phone_number: phonenumber,
                gender: gender,
                image: req.file.originalname
            },
            {
                where: {id: req.params.id}
            }
        );
        res.redirect('/users/profile');
    }, 
    deleteUser: async (req, res) => {
        Users.destroy(
            {
                where: {id: req.params.id}
            }
        )
        res.clearCookie('userEmail');
        req.session.destroy();
res.redirect("/")

}
   
}
module.exports= usersController;
// ... //