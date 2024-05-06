import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Uncomment the following to see the bug
    // environment: "jsdom", // NOT WORKING
    environment: "happy-dom", // WORKING
  },
});
