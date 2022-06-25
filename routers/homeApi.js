const express = require('express');
const router = express.Router();
const path = require('path');

//router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
router.get('/', (req, res) => res.render(path.join(__dirname, '../views-ejs/index.ejs')));
module.exports = router;