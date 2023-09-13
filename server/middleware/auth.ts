import { NextFunction, Request, Response } from 'express';
import { UnAuthenticatedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

declare const process: {
	env: {
		JWT_SECRET: string;
	};
};
interface Payload {
	userId: string; // Replace 'string' with the actual type of your userId
}

const authenticateUser = async (req: Request, res: Response<any>, next: NextFunction) => {
	const token = req.cookies.token;

	if (!token) {
		console.log('No token found');
		// Assuming you are using Express, you can send an error response to the client
		res.status(401).json({ error: 'Unauthorized' });
		return; // Return to stop further execution of the code
	}
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET) as Payload;
		req.user = { userId: payload?.userId };
		next();
	} catch (error) {
		console.error('Error verifying token:', error);
		// Assuming you are using Express, you can send an error response to the client
		res.status(400).json({ error: 'Authentication Invalid' });
	}
};
export default authenticateUser;
