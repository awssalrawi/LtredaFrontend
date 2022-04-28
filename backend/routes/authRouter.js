const express = require('express');
const router = express.Router();
const {
  signupWithEmailAndPassword,
  activateAccountByEmailLink,
  signInWithEmailAndPassword,
} = require('../controllers/authController');
const {
  userSignUpValidator,
  userSignInValidator,
  runValidator,
} = require('../utilities/validator');
//*Sign up using email and password
router.post(
  '/signup',
  userSignUpValidator,
  runValidator,
  signupWithEmailAndPassword
);

router.post('/active-account', activateAccountByEmailLink);
//*Sign in using email and password
router.post(
  '/signin',
  userSignInValidator,
  runValidator,
  signInWithEmailAndPassword
);

module.exports = router;
