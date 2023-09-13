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
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const User_1 = __importDefault(require("../models/User"));
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(id);
    done(null, user);
}));
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5173/api/v1/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const existingUser = yield User_1.default.findOne({
            email: (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0].value, //use email in this case since field is set to unique in MongoDB
        });
        if (existingUser) {
            // If the user exists, redirect to the home page or any other desired page
            return done(null, existingUser);
        }
        // If the user does not exist, create a new user
        const user = yield User_1.default.create({
            googleId: profile.id,
            firstName: profile.displayName,
            lastName: '',
            email: (_b = profile.emails) === null || _b === void 0 ? void 0 : _b[0].value,
            password: crypto_1.default.randomBytes(64).toString('hex'),
            country: '',
            state: '',
            city: '',
            phoneNumber: '09123456789',
            unitAddress: '',
            profession: '',
            language: '',
            aboutMe: 'No biography written.',
        });
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
})));
//# sourceMappingURL=passport.js.map