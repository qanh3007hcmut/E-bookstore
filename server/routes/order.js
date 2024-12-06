/* eslint-disable no-undef */
const express = require('express');
const order = require('../handle/order');
const router = express.Router();

router.get('/all', order.getOrder);

module.exports = router;
