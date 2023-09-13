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
const azureStorageConfig_1 = __importDefault(require("./azureStorageConfig"));
const uuid_1 = require("uuid");
const handleImageUpload = (userId, listingId, vehiclePhotos) => __awaiter(void 0, void 0, void 0, function* () {
    const containerClient = azureStorageConfig_1.default.getContainerClient("listing-images");
    const imagePromises = vehiclePhotos.map((image) => __awaiter(void 0, void 0, void 0, function* () {
        const imageId = (0, uuid_1.v4)(); // Generate a unique filename
        const blobClient = containerClient.getBlockBlobClient(`${userId}/${listingId}/${imageId}`);
        yield blobClient.upload(image.data.buffer, image.data.length, {
            blobHTTPHeaders: { blobContentType: image.mimetype },
        });
        return blobClient.url;
    }));
    return Promise.all(imagePromises);
});
exports.default = handleImageUpload;
//# sourceMappingURL=handleImageUpload.js.map