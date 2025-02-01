import { create } from 'ipfs-http-client';
import CryptoJS from "crypto-js";

const projectId = process.env.INFURA_PROJECT_ID;
const projectSecret = process.env.INFURA_PROJECT_SECRET;
const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: { authorization: auth },
});

export const encryptFile = (file, secretKey) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileData = event.target.result;
    const encryptedData = CryptoJS.AES.encrypt(fileData, secretKey).toString();
    return encryptedData;
  };
  reader.readAsBinaryString(file);
};

export default ipfs;
