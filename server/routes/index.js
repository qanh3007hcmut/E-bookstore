const express = require('express');
const login = require('./login');
const books = require('./books');
const router = express.Router();

router.use('/login', login);
router.use('/books', books);
module.exports = router;