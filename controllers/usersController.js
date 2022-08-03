const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
const bcrypt = require('bcryptjs');

const usersController = {

    users: (req, res) => {
     
        
            const usersFile = path.join(__dirname, '../data/users.json');
            const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
            res.render("users", { usersJ: usersJ })
        
    } ,
    crearUsers: (req, res) => {

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = bcrypt.hashSync(req.body.password, 1);
        const phonenumber = req.body.phonenumber;
        const gender = req.body.gender;
        const image = req.file.originalname;
       

        // got them fused in a Object Literal;
        const fuseData = {
            id: usersJ.length + 1,
            firstname: firstname, lastname: lastname, email: email, password: password, phonenumber: phonenumber, gender: gender , image:image
        };
        // 	Insert them, then they got sent away to the database.
        usersJ.push(fuseData);
        fs.writeFileSync(usersFile, JSON.stringify(usersJ), 'utf-8');

        //finally, you got kicked back to products for good.
        res.redirect('users');
    },
    profile: (req, res) => {
        
        res.render("profile", {
            user: req.session.userLogged
        });
    }
   
}
module.exports= usersController;