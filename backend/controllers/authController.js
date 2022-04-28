const catchAsync = require('../utilities/catchAsync');
const User = require('../models/userModel');
const AppError = require('./../utilities/appError');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utilities/sendEmail');
const sendEmailWithSIB = require('../utilities/SIBEmail');
const { promisify } = require('util');

//* Signup user with email and password /api/v1/user/signup

exports.signupWithEmailAndPassword = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  //*Check if user is already exists
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    console.log('before error');
    return next(
      new AppError(`there is already a user with this email : ${email}`, 400)
    );
  }
  const temporaryToken = jwt.sign(
    { name, email, password },
    process.env.JWT_ACCOUNT_ACTIVATION,
    { expiresIn: '10m' }
  );

  // const activateEmailContent = {
  //   email,
  //   subject: 'Activate account',
  //   message: `
  //   <p>Please use this link to activate your account</p>
  //   <p>${process.env.CLIENT_URL}/user/active-account/${temporaryToken}</p>
  //   <hr/>
  //   <h5>This email my contain sensitive information</h5>
  //   <p>${process.env.CLIENT_URL}</p>
  //   `,
  // };

  //*try
  const options = {
    name,
    email,
    templateId: 1,
    link: `${process.env.CLIENT_URL}/user/active-account/${temporaryToken}`,
  };
  await sendEmailWithSIB(options);
  //*try

  // await sendEmail(activateEmailContent);
  //*I think I should change user schema method later
  // await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    message: `activate link has been sent to ${email}`,
  });
});
exports.activateAccountByEmailLink = catchAsync(async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return next(
      new AppError('something went wrong,please try again later', 404)
    );
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_ACCOUNT_ACTIVATION
  );

  const { name, email, password } = decodedToken;
  console.log('decodedToken = ', decodedToken);

  await User.create({ name, email, password });
  res.status(201).json({
    success: true,
    message: 'Signup success, You can sign in now',
  });
});

exports.signInWithEmailAndPassword = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return next(new AppError(`There is no user with email :${email}`, 401));

  if (!user.authenticate(password))
    return next(
      new AppError(
        'Your Password does not match with email if you forgot your password please check forgot password below',
        401
      )
    );

  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  //const {_id,name,role} = user;

  res.status(200).json({
    success: true,
    token,
    data: user,
  });
});
