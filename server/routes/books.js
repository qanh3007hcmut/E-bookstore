/* eslint-disable no-undef */
const express = require('express');
const getBook = require('../handle/getbook');
const router = express.Router();

router.get('/book', getBook.get_book);
router.get('/page', getBook.get_page);
router.get('/allbooks', getBook.get_all_book);
router.get('/authors', getBook.get_authors);
router.get('/publishers', getBook.get_publishers);
router.get('/series', getBook.get_series);
router.get('/genres', getBook.get_genres);




module.exports = router;
