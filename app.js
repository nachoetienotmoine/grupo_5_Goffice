const express = require('express');
const app = express();
const path = require('path');

const routersRegister = require('./routers/registerApi');
const routersDetalle = require('./routers/detalleApi');
const routersCarrito = require('./routers/carritoApi');
const routersHome = require('./routers/homeApi');
const routersLogin = require('./routers/loginApi');
const routersProdList = require('./routers/prodListApi');
const routersUsers = require('./routers/users');
const routersProductos = require('./routers/productos');
const routersAdmin = require('./routers/admin')
const bcrypt =  require ( 'bcryptjs');



const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');


app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set('views', __dirname + '/views-ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/registro', routersRegister);
app.use('/detalle', routersDetalle);
app.use('/carrito', routersCarrito);
app.use('/', routersHome);
app.use('/login', routersLogin);
app.use('/prodList', routersProdList);
app.use('/productos', routersProductos);
app.use('/productos/:id?', routersProductos);
app.use('/users', routersUsers);
app.use('/admin', routersAdmin);
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});






