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
exports.getUserData = void 0;
const User_1 = __importDefault(require("../models/User"));
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const user = yield User_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId);
        if (!user) {
            throw new errors_1.NotFoundError(`User with id ${(_b = req.user) === null || _b === void 0 ? void 0 : _b.userId} not found`);
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({ user });
    }
    catch (error) {
        throw new errors_1.BadRequestError('Invalid request');
    }
});
exports.getUserData = getUserData;
//# sourceMappingURL=userController.js.map