"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importStar(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const emailValidator = (email) => {
    return validator_1.default.isEmail(email);
};
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Lastname',
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
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        select: false,
    },
    country: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Philippines',
    },
    state: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Cebu',
    },
    unitAddress: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Unknown',
    },
    city: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Cebu City',
    },
    isHost: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => validator_1.default.isMobilePhone(value, 'any', { strictMode: false }),
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    profession: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Unknown',
    },
    language: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'Unknown',
    },
    aboutMe: {
        type: String,
        maxlength: 300,
        trim: true,
        default: 'Please tell us about yourself...',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isLicensed: {
        type: Boolean,
        default: false,
    },
});
//User.js
UserSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //calling this.modifiedPaths() returns an array of modified paths
        //check if the password IS NOT modified. if it isn't then just return and don't hash
        if (!this.isModified('password'))
            return;
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
    });
});
UserSchema.methods.createJWT = function () {
    return jsonwebtoken_1.default.sign({
        userId: this._id,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
};
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcryptjs_1.default.compare(candidatePassword, this.password);
        return isMatch;
    });
};
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
//# sourceMappingURL=User.js.map