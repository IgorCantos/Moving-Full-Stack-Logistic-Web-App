const express = require('express');
const router = express.Router();
const { orderController } = require('../controllers/order-controller');
const { verifyJWT } = require('../middlewares/verify-jwt')

router.post('/nova-encomenda', verifyJWT.isValidOrNot, orderController.createNewOrder);

module.exports = router;