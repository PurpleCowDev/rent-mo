export const initialInfoState = {
	brand: '',
	model: '',
	street: '',
	city: '',
	email: '',
	mobileNumber: '',
	state: '',
	country: '',
	price: null,
	zipCode: '',
	licensePlateNumber: '',
	carRegistrationNumber: '',
	carAvailability: { startDate: new Date(), endDate: new Date() },
	vehiclePhotos: [],
};

export const initialUserUpdate = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	profession: '',
	language: '',
	aboutMe: '',
};

export const initialUserProfile = {
	firstName: '',
	lastName: '',
	createdAt: '',
	phoneNumber: '',
	profession: '',
	email: '',
	unitAddress: '',
	city: '',
	state: '',
	country: '',
	isLicensed: false,
	isVerified: false,
	badge: '',
	language: '',
	aboutMe: '',
};
