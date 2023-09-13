import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import User, { IUser } from '../models/User';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

declare const process: {
	env: {
		GOOGLE_CLIENT_ID: string;
		GOOGLE_CLIENT_SECRET: string;
	};
};

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user: any, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:5173/api/v1/auth/google/redirect',
		},
		async (accessToken: any, refreshToken: any, profile: any, done: any) => {
			try {
				const existingUser = await User.findOne({
					email: profile.emails?.[0].value, //use email in this case since field is set to unique in MongoDB
				});
				if (existingUser) {
					// If the user exists, redirect to the home page or any other desired page
					return done(null, existingUser);
				}

				// If the user does not exist, create a new user
				const user = await User.create({
					googleId: profile.id,
					firstName: profile.displayName,
					lastName: '',
					email: profile.emails?.[0].value,
					password: crypto.randomBytes(64).toString('hex'),
					country: '',
					state: '',
					city: '',
					phoneNumber: '09123456789',
					unitAddress: '',
					profession: '',
					language: '',
					aboutMe: 'No biography written.',
				});

				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);
