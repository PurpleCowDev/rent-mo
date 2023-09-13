import mongoose, { Schema, Document, ObjectId } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

declare const process: {
	env: {
		JWT_SECRET: string;
		JWT_LIFETIME: string;
	};
};
export interface IUser extends Document {
	_id: ObjectId;
	googleId?: string | null;
	id: string;
	firstName: string;
	lastName: string;
	name?: string;
	email: string;
	password: string;
	country?: string;
	state?: string;
	city?: string;
	phoneNumber?: string;
	unitAddress?: string;
	createdAt: Date;
	isHost: boolean;
	profession?: string;
	language?: string;
	isVerified: boolean;
	isLicensed: boolean;
	aboutMe?: string;
	[key: string]: any;
	createJWT: () => string;
	comparePassword: (password: string) => boolean;
}

const emailValidator = (email: string) => {
	return validator.isEmail(email);
};

const UserSchema: Schema<IUser> = new Schema({
	firstName: {
		type: String,
		required: [true, 'Please provide a name'],
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	lastName: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Lastname',
	},
	email: {
		type: String,
		required: [true, 'Please provide an email'],
		validate: {
			validator: emailValidator,
			message: 'Please provide a valid email',
		},
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
		minlength: 6,
		select: false,
	},
	country: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Philippines',
	},
	state: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Cebu',
	},
	unitAddress: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Unknown',
	},
	city: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Cebu City',
	},
	isHost: {
		type: Boolean,
		default: false,
	},
	phoneNumber: {
		type: String,
		trim: true,
		validate: {
			validator: (value: string) => validator.isMobilePhone(value, 'any', { strictMode: false }),
			message: (props) => `${props.value} is not a valid phone number!`,
		},
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	profession: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Unknown',
	},
	language: {
		type: String,
		maxlength: 20,
		trim: true,
		default: 'Unknown',
	},
	aboutMe: {
		type: String,
		maxlength: 300,
		trim: true,
		default: 'Please tell us about yourself...',
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	isLicensed: {
		type: Boolean,
		default: false,
	},
	
});

//User.js
UserSchema.pre('save', async function(){
	//calling this.modifiedPaths() returns an array of modified paths
	//check if the password IS NOT modified. if it isn't then just return and don't hash
	if(!this.isModified('password')) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
  });

UserSchema.methods.createJWT = function () {
	return jwt.sign(
		{
			userId: this._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_LIFETIME,
		}
	);
};

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
