/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const logController = require('../handle/user')

router.get('/info', logController.get_info);

module.exports = router;