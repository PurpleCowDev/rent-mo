import { StatusCodes } from 'http-status-codes';
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
	statusCode?: number;
	message: string;
	name: string;
	errors?: { message: string }[];
	code?: number;
	keyValue?: Record<string, any>;
}

export default function errorHandlerMiddleware(err: CustomError, req: Request, res: Response, next: NextFunction) {
	console.log(err.message);

	const defaultError: CustomError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || 'Something went wrong, please try again',
		name: err.name,
	};

	if (err.name === 'ValidationError') {
		defaultError.statusCode = StatusCodes.BAD_REQUEST;
	}

	if (err?.code === 11000) {
		defaultError.statusCode = StatusCodes.BAD_REQUEST;
		defaultError.message = `field has to be unique`;
	}

	res.status(200).json({ message: defaultError.message });
}
