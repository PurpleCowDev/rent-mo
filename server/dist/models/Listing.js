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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const emailValidator = (email) => {
    return validator_1.default.isEmail(email);
};
const ListingSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
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
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(09\d{9})$/.test(v); // Validates a 10-digit mobile number
            },
            message: (props) => `${props.value} is not a valid mobile number!`,
        },
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    licensePlateNumber: {
        type: String,
        required: true,
    },
    carRegistrationNumber: {
        type: String,
        required: true,
    },
    carAvailability: {
        startDate: {
            type: Date,
            default: Date.now,
            required: true,
        },
        endDate: {
            type: Date,
            default: Date.now,
            required: false,
        },
    },
    vehiclePhotos: [
        {
            type: String,
            required: false,
        },
    ],
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
const Listing = mongoose_1.default.model('Listing', ListingSchema);
exports.default = Listing;
//# sourceMappingURL=Listing.js.map