const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/verify-jwt')
const { authController } = require("../controllers/auth-controller");

router.get('/auth', verifyJWT.isValidOrNot, authController.isAuth);

module.exports = router;