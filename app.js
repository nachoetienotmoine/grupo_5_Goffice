const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/carrito.html')));
app.listen(3000,() => {
    console.log('Corriendo en el puerto 3000');
})
