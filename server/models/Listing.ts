import mongoose, { Document, Schema, Types } from 'mongoose';
import validator from 'validator';

interface ICarAvailability {
	startDate: Date;
	endDate: Date;
}

interface ICar extends Document {
	brand: string;
	model: string;
	street: string;
	city: string;
	email: string;
	mobileNumber: string;
	state: string;
	country: string;
	price: number;
	zipCode: string;
	licensePlateNumber: string;
	carRegistrationNumber: string;
	carAvailability: ICarAvailability;
	vehiclePhotos: string[];
}
const emailValidator = (email: string) => {
	return validator.isEmail(email);
};
const ListingSchema: Schema = new Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
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
	mobileNumber: {
		type: String,
		required: true,
		validate: {
			validator: function(v: string) {
				return /^(09\d{9})$/.test(v); // Validates a 10-digit mobile number
			},
			message: (props: any) => `${props.value} is not a valid mobile number!`,
		},
	},
	state: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	zipCode: {
		type: String,
		required: true,
	},
	licensePlateNumber: {
		type: String,
		required: true,
	},
	carRegistrationNumber: {
		type: String,
		required: true,
	},
	carAvailability: {
		startDate: {
			type: Date,
			default: Date.now,
			required: true,
		},
		endDate: {
			type: Date,
			default: Date.now,
			required: false,
		},
	},
	vehiclePhotos: [
		{
			type: String, // Array of paths or URLs of uploaded photos
			required: false,
		},
	],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', // Reference the User model
		required: true,
	},
});

const Listing = mongoose.model<ICar>('Listing', ListingSchema);

export default Listing;
