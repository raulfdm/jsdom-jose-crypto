# JSDOM + Jose => Uint8Array issue

This is a bug repro repo to demonstrate a bug when trying to combine [jose](https://github.com/panva/jose) (JWT utility) in a test environment with [JSDOM](https://github.com/jsdom/jsdom).

## About

This repo contains a piece of code to generate a signed JWT token using jose.

## Repro

This repo are setup to work by default.

First, install the project dependencies:

```bash
npm i
```

Now, you can run the following npm script:

```bash
npm run print
```

This will print the generated JWT Token.

Now, run the unit test with Vitest (no JSDOM yet):

```bash
npm run test
```

The single test will pass.

Now, go to `vitest.config.js` and enable the environment:

```diff
export default defineConfig({
  test: {
    // Uncomment the following to see the bug
-   // environment: "jsdom",
+   environment: "jsdom",
  },
});
```

Now, if you run the test script again (`npm run test`), you'll see it's broken:

```text
 FAIL  src/generate-jwt.test.js > generateJWT > should generate a JWT token
TypeError: payload must be an instance of Uint8Array
 ❯ new FlattenedSign node_modules/jose/dist/node/esm/jws/flattened/sign.js:14:19
 ❯ new CompactSign node_modules/jose/dist/node/esm/jws/compact/sign.js:5:27
 ❯ SignJWT.sign node_modules/jose/dist/node/esm/jwt/sign.js:12:21
 ❯ Module.generateJWT src/generate-jwt.js:20:6
     18|     .setProtectedHeader({ alg: "RS256" })
     19|     .setExpirationTime("5m") // 5 minutes from now
     20|     .sign(privateKey);
       |      ^
     21|
     22|   return jwt;
 ❯ src/generate-jwt.test.js:13:17
```
