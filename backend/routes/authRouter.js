const express = require('express');
const router = express.Router();
const res = require('express/lib/response');

const {
  signupWithEmailAndPassword,
  activateAccountByEmailLink,
  signInWithEmailAndPassword,
  getUserById,
  requireSignIn,
} = require('../controllers/authController');
const {
  userSignUpValidator,
  userSignInValidator,
  runValidator,
} = require('../utilities/validator');
const {
  getAllUsers,
  getMyProfileData,
} = require('../controllers/userController');
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

router.get('/forx', requireSignIn, getMyProfileData);
//router.get('/me', getMyProfileData);
router.route('/get-all-users').get(requireSignIn, getAllUsers);

router.route('/:id').get(getUserById);
// router.get('/:id', getUserById);

module.exports = router;
