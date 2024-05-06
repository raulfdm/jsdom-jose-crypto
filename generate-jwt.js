import { SignJWT, importPKCS8 } from "jose";
import * as crypto from "node:crypto";

/**
 * Generate a JWT token using the provided payload and private key
 * @param payload - JWT payload
 * @param privatePemKey - Private key in PEM format
 * @returns JWT token
 */
export async function generateJWT(payload, privatePemKey) {
  const privateKey = await importPKCS8(privatePemKey, "RS256");

  const finalPayload = {
    ...payload,
    iss: "test@example.com",
    scope: "https://www.googleapis.com/auth/androidpublisher",
    aud: "https://www.googleapis.com/oauth2/v4/token",
    exp: Math.floor(new Date().getTime() / 1000 + 300), // Set expiration 5 minutes from now
    iat: Math.floor(new Date().getTime() / 1000), // Set issued at to current time
  };

  const jwt = await new SignJWT(finalPayload)
    .setProtectedHeader({ alg: "RS256" })
    .setExpirationTime("5m") // 5 minutes from now
    .sign(privateKey);

  return jwt;
}

console.log(
  await generateJWT(
    {
      name: "John Doe",
      role: "admin",
      sub: "john.doe@email.com",
      perms: ["create_feature_flag", "read_feature_flag"],
    },
    generateTestPrivateKey()
  )
);

/**
 *
 * @returns Private key in PEM format
 */
function generateTestPrivateKey() {
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
