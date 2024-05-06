import { SignJWT, importPKCS8 } from "jose";

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
