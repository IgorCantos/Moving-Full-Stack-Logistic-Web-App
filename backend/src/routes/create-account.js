const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/auth-controller');

router.post('/criar-conta', authController.createNewUser);

module.exports = router;
