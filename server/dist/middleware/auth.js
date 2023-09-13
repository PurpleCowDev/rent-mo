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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    if (!token) {
        console.log('No token found');
        // Assuming you are using Express, you can send an error response to the client
        res.status(401).json({ error: 'Unauthorized' });
        return; // Return to stop further execution of the code
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload === null || payload === void 0 ? void 0 : payload.userId };
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        // Assuming you are using Express, you can send an error response to the client
        res.status(400).json({ error: 'Authentication Invalid' });
    }
});
exports.default = authenticateUser;
//# sourceMappingURL=auth.js.map