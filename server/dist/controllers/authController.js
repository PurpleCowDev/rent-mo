"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const attachCookies_1 = __importDefault(require("../utils/attachCookies"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            throw new errors_1.BadRequestError("Please provide all values");
        }
        const userAlreadyExists = yield User_1.default.findOne({ email });
        if (userAlreadyExists) {
            throw new errors_1.BadRequestError("User already exists");
        }
        const user = yield User_1.default.create({
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
        (0, attachCookies_1.default)({ res, token });
        //---- return response
        res.status(http_status_codes_1.StatusCodes.CREATED).json({
            user: {
                email: user.email,
                name: user.name,
                location: `${user.city}, ${user.state}, ${user.country}`,
            },
        });
    }
    catch (error) {
        throw new errors_1.BadRequestError(`${error}`);
    }
});
exports.register = register;
/////////////////////////////////////////////////////////////////////////////////
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new errors_1.BadRequestError("Please provide all values");
    }
    //find user and get password
    const user = yield User_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new errors_1.UnAuthenticatedError(`user does not exist`);
    }
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new errors_1.UnAuthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    user.password = "";
    (0, attachCookies_1.default)({ res, token });
    res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ user, location: `${user.city}, ${user.state}, ${user.country}` });
});
exports.login = login;
//////////////////////////////////////////////////////////////////////////////////////////
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
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
        const user = yield User_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId);
        fieldsToUpdate.forEach((field) => {
            if (req.body[field] !== undefined) {
                user[field] = req.body[field];
            }
        });
        yield user.save();
        const token = user.createJWT();
        (0, attachCookies_1.default)({ res, token });
        res.status(http_status_codes_1.StatusCodes.OK).json({ user, token });
    }
    catch (error) {
        throw new errors_1.NotFoundError("Field not found");
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=authController.js.map