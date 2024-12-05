/* eslint-disable no-undef */
const express = require('express');
const getBook = require('../handle/getbook');
const router = express.Router();

router.get('/book', getBook.get_book);
router.get('/page', getBook.get_page);
router.get('/allbooks', getBook.get_all_book);

module.exports = router;
