
const fs = require("fs")

const productos = {
    fileName: './data/product.json',
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll: function () {
        return this.getData();
    },
    generateId : function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1
        }
        return 1;
        
    },
    list: (req, res) => {
        res.render("prodList")
    },
    crearProductos: (req, res) => {
        res.render("prodC")
    },
    DetalleProducto: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser =>
            oneUser.id === id);
        return userFound;
    },
    crearProductosPost: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers , null , ' '));
        return "Producto agregado";
        
    }
    ,
    EditProducto: (req, res) => {
        res.render("prodDetalle")
    },
    deleteProducto: (req, res) => {
        res.render("prodDetalle")
    },

    // completar gonzalo//
   
}
 

module.exports = productos;
// listar: (req, res) => {
    //     res.status(200).send(productosData);
    // },

    // agregarProducto: (req, res) => {
    //     res.status(201).send("se ha creado el producto");
    // },
    // borrarProducto: (req, res) => {
    //     const productoId = parseInt(req.params.id, 10);

    //     for (let i = 0; i < productosData.length ; i++) {
    //         if (productosData[i].id === productoId) {
    //             productosData.splice(i,1)
    //         }
    //     }

    //     console.log(productosData);

    //     res.send(`se ha borrado el producto con id ${productoId}`);
    // },
