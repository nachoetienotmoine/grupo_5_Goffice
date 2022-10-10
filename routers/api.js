const express = require('express');
const router = express.Router();


const apiController = require('../controllers/apiController');

router.get('/products/', apiController.products);

router.get('/products/:id', apiController.oneProduct);

module.exports = router;

