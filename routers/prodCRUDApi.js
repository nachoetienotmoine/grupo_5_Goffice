const express = require('express');
const router = express.Router();


const prodCRUDController = require('../controllers/prodCRUDAController');

router.get('/', prodCRUDController.index);

module.exports = router;