"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_blob_1 = require("@azure/storage-blob");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(connectionString);
exports.default = blobServiceClient;
//# sourceMappingURL=azureStorageConfig.js.map