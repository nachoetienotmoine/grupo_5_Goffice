const express = require('express');
const app = express();
const path = require('path');
const routersRegister = require('./routers/register');
const routersDetalle = require('./routers/detalle');
const routersCarrito = require('./routers/carrito');
const routersHome = require('./routers/home');
const routersLogin = require('./routers/login');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/registro', routersRegister);
app.use('/detalle', routersDetalle);
app.use('/carrito', routersCarrito);
app.use('/', routersHome);
app.use('/login', routersLogin);
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})

// instalandoEJS --->npm install ejs //
app.set("view engine", "ejs"); // set entre otras cosas nos permite definir el motor de plantillas que queremos utilizar //
//app.set('views', __dirname + ''); //configura la carpeta views-ejs para que reemplace a la que express lee por defecto.
app.use(express.static('public')); //Con esto se le aclara a express donde están los recursos estáticos, para poder acceder a ellos desde las vistas
app.get('/index.ejs', (req, res) => { // usamos esta parte de código para renderizar la vista de index.ejs (por ahora falta el rutero y controllers)
    res.render('index');
    }
)

