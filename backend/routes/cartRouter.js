const express = require('express');
const router = express.Router();
const { addItemToCart } = require('../controllers/cartController');
const { requireSignIn } = require('../controllers/authController');

router.post('/user/cart/additem', requireSignIn, addItemToCart);

module.exports = router;
