import { JWT_PAYLOAD, generateTestPrivateKey } from "./util.js";
import { generateJWT } from "./generate-jwt.js";

console.log(await generateJWT(JWT_PAYLOAD, generateTestPrivateKey()));
