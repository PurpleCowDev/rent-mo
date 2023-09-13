import { Request, Response } from 'express';
import User from '../models/User';
import { BadRequestError, NotFoundError } from '../errors';
import { StatusCodes } from 'http-status-codes';

export const getUserData = async (req: Request, res: Response) => {
	try {
		const user = await User.findById(req.user?.userId);
		if (!user) {
			throw new NotFoundError(`User with id ${req.user?.userId} not found`);
		}
		res.status(StatusCodes.OK).json({ user });
	} catch (error) {
		throw new BadRequestError('Invalid request');
	}
};
