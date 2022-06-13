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