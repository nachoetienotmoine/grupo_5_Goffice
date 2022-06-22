const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.get('/registro', (req, res) => res.sendFile(path.join(__dirname, './views/registro.html')));
app.get('/detalle', (req, res) => res.sendFile(path.join(__dirname, './views/detalle.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, './views/carrito.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/prueba', (req, res) => res.sendFile(path.join(__dirname, './views/prueba.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})

// instalandoEJS --->npm install ejs //
app.set("view engine", "ejs"); // set entre otras cosas nos permite definir el motor de plantillas que queremos utilizar //
app.set('views', __dirname + '/views-ejs'); //configura la carpeta views-ejs para que reemplace a la que express lee por defecto.
app.use(express.static('public')); //Con esto se le aclara a express donde están los recursos estáticos, para poder acceder a ellos desde las vistas
app.get('/', (req, res) => { // usamos esta parte de código para renderizar la vista de index.ejs (por ahora falta el rutero y controllers)
    res.render('index')
    }
)

