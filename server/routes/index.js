/* eslint-disable no-undef */
const express = require('express');
const login = require('./login');
const books = require('./books');
const order = require('./order');
const user = require('./user');
const router = express.Router();

router.use('/login', login);
router.use('/books', books);
router.use('/order', order);
router.use('/user', user);


module.exports = router;