const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require('cors');

const routersDetalle = require('./routers/detalleApi');
const routersCarrito = require('./routers/carritoApi');
const routersHome = require('./routers/homeApi');
const routersBaseDeDatosInfo = require('./routers/baseDeDatosInfo');
const routersSoporte = require ('./routers/soporte');

const routersUsers = require('./routers/users');

const routersAdmin = require('./routers/admin');

const bcrypt =  require ( 'bcryptjs');


const guestMiddleware = require('./middlewares/guestMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const adminMiddleware = require('./middlewares/adminMiddleware');


const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');


app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set('views', __dirname + '/views-ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(cors({
    origin: "http://localhost:4000",
}))

app.use('/baseDeDatosInfo', routersBaseDeDatosInfo)
app.use('/detalle', routersDetalle);
app.use('/carrito', routersCarrito);
app.use('/soporte', routersSoporte);

app.use('/', routersHome);
app.use('/users', routersUsers);
app.use('/admin',authMiddleware,adminMiddleware ,routersAdmin);
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});






