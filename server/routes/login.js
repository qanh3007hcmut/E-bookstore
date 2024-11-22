const express = require('express');
const router = express.Router();
const logController = require('../handle/login')

router.post('/login', logController.login);