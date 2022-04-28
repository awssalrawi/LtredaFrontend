const catchAsync = require("../utilities/catchAsync");
const Cart = require("../models/cartModel");

exports.addItemToCart = catchAsync(async (req, res, next) => {
  const cartItems = req.body.cartItems;

  const addedItems = await Cart.create({ cartItems });
  res.status(201).json({
    message: "card",
    data: addedItems,
  });
});
