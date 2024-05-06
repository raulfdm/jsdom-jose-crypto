import * as crypto from "node:crypto";

export function generateTestPrivateKey() {
  // Generate a test private key using Node.js crypto
  const { privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048, // Generate a key with a 2048 bit modulus
    publicKeyEncoding: {
      type: "spki", // Recommended to use spki for public key encoding
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8", // Ensure PKCS#8 format
      format: "pem",
    },
  });

  return privateKey; // Returns the privateKey as a PKCS#8 PEM string
}

export const JWT_PAYLOAD = {
  name: "John Doe",
  role: "admin",
  sub: "john.doe@email.com",
  perms: ["create", "read"],
};
