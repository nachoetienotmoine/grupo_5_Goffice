const express = require('express');
const router = express.Router();


const apiController = require('../controllers/apiController');

router.get('/users', apiController.users);
router.get('/users/:id', apiController.oneUsers);

router.get('/products/', apiController.products);
router.get('/products/:id', apiController.oneProduct);

router.get('/soldTotal', apiController.soldTotal);
router.get('/fiveMostSold', apiController.fiveMostSold);

router.get('/createProduct', apiController.createForm);

module.exports = router;

