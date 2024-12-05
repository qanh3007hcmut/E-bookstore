const express = require('express');
const getBook = require('../handle/getbook');
const router = express.Router();

router.get('/book', getBook.get_book);

module.exports = router;
