const fs = require("fs");
const { parse } = require("path");
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

const usersController = {

    listar: (req, res) => {
     
        
            const usersFile = path.join(__dirname, '../data/users.json');
            const usersJ = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
            res.render("users", { usersJ: usersJ })
        
    } 
}
module.exports= usersController;