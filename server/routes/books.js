const express = require('express');
const getBook = require('../models/getbook');
const router = express.Router();

router.get('/book', getBook.book);
router.get('/image', getBook.image);

module.exports = router;
