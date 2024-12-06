const express = require('express');
const router = express.Router();
const orderController = require('../handle/order');

router.post('/order', orderController.saveOrder);
router.get('/order', orderController.getOrder);

module.exports = router;