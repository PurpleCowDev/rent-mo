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
exports.getSpecificListing = exports.deleteListing = exports.getListingsByUser = exports.getAllListings = exports.updateListing = exports.createListing = void 0;
const Listing_1 = __importDefault(require("../models/Listing"));
const http_status_codes_1 = require("http-status-codes");
const azureStorageConfig_1 = __importDefault(require("../utils/azureStorageConfig"));
const uuid_1 = require("uuid");
const errors_1 = require("../errors");
// Configure Multer for image upload
const createListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { brand, model, street, city, email, mobileNumber, state, country, price, zipCode, licensePlateNumber, carRegistrationNumber, carAvailability, } = req.body;
    try {
        const newListing = new Listing_1.default({
            brand,
            model,
            street,
            city,
            email,
            mobileNumber,
            state,
            country,
            price,
            zipCode,
            licensePlateNumber,
            carRegistrationNumber,
            carAvailability: JSON.parse(carAvailability),
            //carAvailability,
            vehiclePhotos: [""],
            user: (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId,
        });
        const listing = yield Listing_1.default.create(newListing);
        const containerClient = azureStorageConfig_1.default.getContainerClient("listing-images");
        const userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
        const listingId = listing._id.toString();
        const { vehiclePhotos } = req.files;
        const imagePromises = vehiclePhotos.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const imageId = (0, uuid_1.v4)(); // Generate a unique filename
            const blobClient = containerClient.getBlockBlobClient(`${userId}/${listingId}/${imageId}`);
            yield blobClient.upload(image.data.buffer, image.data.length, {
                blobHTTPHeaders: { blobContentType: image.mimetype },
            });
            return blobClient.url;
        }));
        const uploadedImageUrls = yield Promise.all(imagePromises);
        listing.vehiclePhotos = uploadedImageUrls;
        yield listing.save();
        res.status(http_status_codes_1.StatusCodes.CREATED).json({ listing });
    }
    catch (error) {
        console.log(error);
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Error creating listing" });
    }
});
exports.createListing = createListing;
const updateListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const listingId = req.params.id; // Assuming you're passing the listing ID as a URL parameter
    try {
        let listing = (yield Listing_1.default.findById(listingId));
        if (!listing) {
            return res
                .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                .json({ error: "Listing not found" });
        }
        // Combine both req.body and req.files data
        const formData = Object.assign({}, req.body);
        const vehiclePhotos = req.files;
        formData.vehiclePhotos = vehiclePhotos;
        const { vehiclePhotos: vehiclePhotosArray } = formData.vehiclePhotos;
        for (const [key, value] of Object.entries(formData)) {
            if (key === "carAvailability") {
                if (typeof value === "string") {
                    listing[key] = JSON.parse(value);
                }
                else {
                    throw new Error(`Invalid value for ${key}`);
                }
            }
            else if (key === "vehiclePhotos") {
                const userId = (_c = req.user) === null || _c === void 0 ? void 0 : _c.userId;
                const containerClient = azureStorageConfig_1.default.getContainerClient("listing-images");
                const imagePromises = vehiclePhotosArray.map((image) => __awaiter(void 0, void 0, void 0, function* () {
                    const imageId = (0, uuid_1.v4)(); // Generate a unique filename
                    const blobClient = containerClient.getBlockBlobClient(`${userId}/${listingId}/${imageId}`);
                    yield blobClient.upload(image.data.buffer, image.data.length, {
                        blobHTTPHeaders: { blobContentType: image.mimetype },
                    });
                    return blobClient.url;
                }));
                const uploadedImageUrls = yield Promise.all(imagePromises);
                listing.vehiclePhotos = uploadedImageUrls;
            }
            else {
                if (typeof value === "string") {
                    listing[key] = value;
                }
                else {
                    throw new Error(`Invalid value for ${key}`);
                }
            }
        }
        yield listing.save();
        res.status(http_status_codes_1.StatusCodes.OK).json({ listing });
    }
    catch (error) {
        console.log(error);
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Error updating listing" });
    }
});
exports.updateListing = updateListing;
const getAllListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listings = yield Listing_1.default.find();
    return res.status(http_status_codes_1.StatusCodes.OK).json({ listings });
});
exports.getAllListings = getAllListings;
const getListingsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const listingsByUser = yield Listing_1.default.find({ user: (_d = req.user) === null || _d === void 0 ? void 0 : _d.userId });
    return res.status(http_status_codes_1.StatusCodes.OK).json({ listingsByUser });
});
exports.getListingsByUser = getListingsByUser;
const deleteListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listingId = req.params.id;
        const result = yield Listing_1.default.deleteOne({ _id: listingId });
        if (result.deletedCount === 1) {
            res
                .status(http_status_codes_1.StatusCodes.ACCEPTED)
                .json({ message: "Listing deleted successfully" });
        }
        else {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ error: "Listing not found" });
        }
    }
    catch (error) {
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Error deleting listing" });
    }
});
exports.deleteListing = deleteListing;
const getSpecificListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listingId = req.params.id;
        if (!listingId) {
            throw new errors_1.NotFoundError("Listing not found");
        }
        const listing = (yield Listing_1.default.findById(listingId));
        res.status(http_status_codes_1.StatusCodes.OK).json({ listing });
    }
    catch (error) {
        throw new errors_1.BadRequestError("Bad Request");
    }
});
exports.getSpecificListing = getSpecificListing;
//# sourceMappingURL=listingController.js.map