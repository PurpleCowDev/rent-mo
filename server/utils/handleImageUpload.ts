import blobServiceClient from "./azureStorageConfig";
import { v4 as uuidv4 } from "uuid";


const handleImageUpload = async (
  userId: string,
  listingId: string,
  vehiclePhotos: any
): Promise<string[]> => {
  const containerClient =
    blobServiceClient.getContainerClient("listing-images");

  const imagePromises = vehiclePhotos.map(async (image: any) => {
    const imageId = uuidv4(); // Generate a unique filename
    const blobClient = containerClient.getBlockBlobClient(
      `${userId}/${listingId}/${imageId}`
    );

    await blobClient.upload(image.data.buffer, image.data.length, {
      blobHTTPHeaders: { blobContentType: image.mimetype },
    });

    return blobClient.url;
  });

  return Promise.all(imagePromises);
};

export default handleImageUpload;
