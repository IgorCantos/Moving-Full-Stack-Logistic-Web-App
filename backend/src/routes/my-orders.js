const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/verify-jwt')
const { orderController } = require('../controllers/order-controller');

router.get('/encomendas', verifyJWT.isValidOrNot, orderController.showMyOrders);

module.exports = router;