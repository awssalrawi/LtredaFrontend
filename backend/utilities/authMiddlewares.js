const User = require('./../models/userModel');
const catchAsync = require('./catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./appError');
//*Checks id user is authenticated or not authenticated

exports.isAuthenticatedUser = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new AppError('Please sign in first ', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      ); //403:forbidden
    }
    next();
  };
};
