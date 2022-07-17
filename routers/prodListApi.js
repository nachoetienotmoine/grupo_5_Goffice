const express = require('express');
const router = express.Router();
const path = require('path');

const prodListApiController = require('../controllers/productos');

router.get('/', prodListApiController.listar);
module.exports = router;