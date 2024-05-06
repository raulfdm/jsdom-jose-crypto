import { describe, it, expect, beforeAll, vi } from "vitest";
import { decodeJwt } from "jose";

import { generateJWT } from "./generate-jwt.js";
import { JWT_PAYLOAD, generateTestPrivateKey } from "./util.js";

describe("generateJWT", () => {
  beforeAll(() => {
    vi.setSystemTime(new Date("2023-03-31T00:00:00Z"));
  });

  it("should generate a JWT token", async () => {
    const jwt = await generateJWT(JWT_PAYLOAD, generateTestPrivateKey());

    expect(decodeJwt(jwt)).toMatchInlineSnapshot(`
      {
        "exp": 1680221100,
        "name": "John Doe",
        "perms": [
          "create",
          "read",
        ],
        "role": "admin",
        "sub": "john.doe@email.com",
      }
    `);
  });
});
