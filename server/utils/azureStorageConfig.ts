import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv'

dotenv.config()

declare const process: {
	env: {
		AZURE_STORAGE_CONNECTION_STRING: string;
	};
};

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

export default blobServiceClient;
