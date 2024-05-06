import { describe, it, expect } from "vitest";

import { generateJWT } from "./generate-jwt.js";
import { JWT_PAYLOAD, generateTestPrivateKey } from "./util.js";

describe("generateJWT", () => {
  it("should generate a JWT token", async () => {
    expect(
      await generateJWT(JWT_PAYLOAD, generateTestPrivateKey())
    ).toMatchInlineSnapshot(`"eyJhbGciOiJSUzI1NiJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoiYWRtaW4iLCJzdWIiOiJqb2huLmRvZUBlbWFpbC5jb20iLCJwZXJtcyI6WyJjcmVhdGUiLCJyZWFkIl0sImlzcyI6InRlc3RAZXhhbXBsZS5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYW5kcm9pZHB1Ymxpc2hlciIsImF1ZCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92NC90b2tlbiIsImV4cCI6MTcxNDk5OTk5OCwiaWF0IjoxNzE0OTk5Njk4fQ.G_ks9FF4T3YfK5cQqepWxdx2iRCQd9OMTCn9sVgPtKRJROouAnoAKl5VHe_hzQIVi52xdlRSjnNa9VXxs4PgDxDjzZ2LTqx96UIVhBRd4V9jEjbJk6LB_kOrCmRwl0O-fJ4Bf6wreh0Tl4tPhxiPj3SMCyRI14fjKlVl_79l5zrgzuViFeW63aVFyP6oSe5fUSAnvQqRa7CPsGl0W4yIMOMkUqHM9sN6lbSZd_CpN3Xp7AOXIu1KjSDIabUwGnvyrjCpaOhjIaTECA6vMUR5EAi7he7-woZj70gPAsOYxo9RW4MRV0HtgjPxrkYugUFi_WtINrxcsSsuKaYVYnTnYA"`);
  });
});
