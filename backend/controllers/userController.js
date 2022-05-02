const catchAsync = require('../utilities/catchAsync');
const User = require('../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  console.log('req.user', req.auth);
  const users = await User.find();

  res.status(200).json({
    success: true,
    data: users,
  });
});

exports.getMyProfileData = catchAsync(async (req, res, next) => {
  console.log('req.user', req.user);
  res.status(200).json({
    message: 'hiiii',
  });
});

//*Update user Profile
//*delete user profile
//*update my profile
//* seller role
/**
 *
 *
 *
 *
 * */
