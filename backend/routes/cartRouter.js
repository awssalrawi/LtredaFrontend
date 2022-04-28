const express = require("express");
const router = express.Router();
const { addItemToCart } = require("../controllers/cartController");

router.post("/user/cart/additem", addItemToCart);
module.exports = router;
