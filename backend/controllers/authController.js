const catchAsync = require('../utilities/catchAsync');
const User = require('../models/userModel');
const AppError = require('./../utilities/appError');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utilities/sendEmail');
const sendEmailWithSIB = require('../utilities/SIBEmail');
const { promisify } = require('util');
const { expressjwt } = require('express-jwt');

const { OAuth2Client } = require('google-auth-library');

const fetch = require('node-fetch');
/////////////////////////////////////////////////////////////////////////////////////////////
//*Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {
  //*Create jwt token
  const token = user.getJwtToken();
  //*Options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //!if not httpOnly that mean it can be access by js code
  };

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
    user,
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////
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

  const activateEmailContent = {
    email,
    subject: 'Activate account',
    message: `
    <p>Please use this link to activate your account</p>
    <p>${process.env.CLIENT_URL}/user/active-account/${temporaryToken}</p>
    <hr/>
    <h5>This email my contain sensitive information</h5>
    <p>${process.env.CLIENT_URL}</p>
    `,
  };

  //*try
  // const options = {
  //   name,
  //   email,
  //   templateId: 1,
  //   link: `${process.env.CLIENT_URL}/user/active-account/${temporaryToken}`,
  // };
  //! await sendEmailWithSIB(options);  //for real word email
  //*try

  await sendEmail(activateEmailContent); //! for development purposes
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

  const { name, email, password, passwordConfirm } = decodedToken;
  console.log('decodedToken = ', decodedToken);

  const user = await User.create({ name, email, password });

  // res.status(201).json({
  //   success: true,
  //   message: 'Signup success, You can sign in now',
  // });
  sendToken(user, 200, res);
});

exports.signInWithEmailAndPassword = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log('Yes Awss ');
  const user = await User.findOne({ email }).select('+password');
  console.log(typeof password);
  console.log('Yes Awss ');

  //const checkPass = console.log(checkPass);
  if (!user || !(await user.comparePassword(password))) {
    return next(new AppError('Incorrect email or password', 401)); //* 401 mean unauthorize
  }

  // console.log('I came here');
  // const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES_IN,
  // });

  //const {_id,name,role} = user;
  user.password = undefined;
  // res.status(200).json({
  //   success: true,
  //   token,
  //   user,
  // });
  sendToken(user, 200, res);
});
//*r

exports.LogoutUser = catchAsync(async (req, res, next) => {
  res
    .status(200)
    .cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: 'Logged out successfully',
    });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new Error('There is no user data', 404));

  res.status(200).json({
    user,
  });
});
//*Restrict

//! google and facebook
exports.googleLogin = catchAsync(async (req, res, next) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const { tokenId } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const dataInAuthCont = ticket.getPayload();
  console.log('dataInAuthCont', dataInAuthCont);
  const { email, name, picture, email_verified } = ticket.getPayload();
  if (!email_verified)
    return next(
      new AppError("This Email doesn't verified. Please try another one!", 401)
    );

  const user = await User.findOne({ email });
  console.log('useriffound::', user);
  if (user) {
    return sendToken(user, 200, res);
  }
  const password = process.env.USER_SIGNED_WITH_GOOGLE_PASSWORD;
  const newUser = await User.create({ email, name, picture, password });
  sendToken(newUser, 201, res);
});

exports.facebookLogin = catchAsync(async (req, res, next) => {
  // console.log('req body', req.body);

  const { userID, accessToken } = req.body;

  const url = `https://graph.facebook.com/v13.0/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

  // fetch(url, { method: 'GET' })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     const { name, email } = response;
  //     const picture = response.data.url;
  //   });

  const data = await fetch(url, { method: 'GET' });
  const info = await data.json();
  const { name, email } = info;

  const picture = info.picture.data.url;

  const user = await User.findOne({ email });
  if (user) {
    return sendToken(user, 200, res);
  }

  const password = process.env.USER_SIGNED_WITH_GOOGLE_PASSWORD;
  const newUser = await User.create({ email, name, picture, password });
  sendToken(newUser, 201, res);
});
