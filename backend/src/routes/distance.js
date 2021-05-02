const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/verify-jwt');
const { mapsController } = require('../controllers/maps-controller')

router.post('/distance', verifyJWT.isValidOrNot, mapsController.getDistanceAndTimeBetweenTwoPoints);

module.exports = router;

