import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import { BadRequestError, NotFoundError, UnAuthenticatedError } from "../errors";
import { StatusCodes } from "http-status-codes";
import attachCookies from "../utils/attachCookies";

const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      throw new BadRequestError("Please provide all values");
    }
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new BadRequestError("User already exists");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      country: "",
      state: "",
      city: "",
      phoneNumber: "09123456789",
      unitAddress: "",
      profession: "",
      language: "",
      aboutMe: "No biography written.",
    });
    const token = user.createJWT();
    attachCookies({ res, token });

    //---- return response
    res.status(StatusCodes.CREATED).json({
      user: {
        email: user.email,
        name: user.name,
        location: `${user.city}, ${user.state}, ${user.country}`,
      },
    });
  } catch (error) {
    throw new BadRequestError(`${error}`);
  }
};

/////////////////////////////////////////////////////////////////////////////////
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  //find user and get password
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError(`user does not exist`);
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = "";
  attachCookies({ res, token });

  res
    .status(StatusCodes.OK)
    .json({ user, location: `${user.city}, ${user.state}, ${user.country}` });
};

//////////////////////////////////////////////////////////////////////////////////////////
const updateUser = async (req: Request, res: Response) => {
  try {
	const fieldsToUpdate = [
		"firstName",
		"lastName",
		"country",
		"state",
		"unitAddress",
		"city",
		"phoneNumber",
		"profession",
		"language",
		"aboutMe",
	  ];
	
	  const user = await User.findById(req.user?.userId) as IUser;
	
	  fieldsToUpdate.forEach((field) => {
		if (req.body[field] !== undefined) {
		  user[field] = req.body[field];
		}
	  });
	
	  await user.save();
	
	  const token = user.createJWT();
	  attachCookies({ res, token });
	
	  res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
	throw new NotFoundError("Field not found")
  }
};

export { register, login, updateUser };
