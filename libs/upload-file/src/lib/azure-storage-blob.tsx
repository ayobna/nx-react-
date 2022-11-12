// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';

const containerName = `test`;
const sasToken = "";
const storageAccountName ="gallaryu";

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}



const uploadFileToBlob = async (file: File | null): Promise<string[]> => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(`https://`+storageAccountName+`.blob.core.windows.net/`+sasToken );

  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(containerName);
  console.log(containerClient)


  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return []
};
const createBlobInContainer = async (containerClient: ContainerClient, file: File) => {

  // create blobClient for container
  console.log(file.name)
   const blobClient = containerClient.getBlockBlobClient(file.name);
console.log(blobClient)
  // // set mimetype as determined from browser with file upload control
   const options = { blobHTTPHeaders: { blobContentType: file.type } };
console.log(options)
  // // upload file
  await blobClient.uploadData(file, options);
}
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;
