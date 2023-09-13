import express from 'express';
import { register, login, updateUser } from '../controllers/authController.js';
import passport from 'passport';
import User from '../models/User.js';
import attachCookies from '../utils/attachCookies.js';
import { StatusCodes } from 'http-status-codes';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authenticateUser, updateUser);

router.route('/google').get(
	passport.authenticate('google', {
		scope: ['email', 'profile'],
	})
);

router.route('/google/redirect').get(passport.authenticate('google'), async (req, res) => {
	const user = await User.findOne({ email: req?.user?.email });
	let location = '';
	const token = user?.createJWT();
	attachCookies({ res, token });

	if (user) {
		user.password = ''; //don't return password to client
		location = `${user.city}, ${user.state}, ${user.country}`;
	}

	res.status(StatusCodes.OK).redirect('/profile');
});

router.route('/logout').get((req, res, next) => {
	res.clearCookie('token');
	res.end();
});

router.route('/current_user').get((req, res) => {
	const { user } = req;
	console.log(user);
});

export default router;
