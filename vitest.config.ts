// /// <reference types="vitest" />
// import { defineConfig } from "vitest/config";
// import vue from "@vitejs/plugin-vue";
// import path from "path";

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     deps: {
//       inline: ["vue"],
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./"),
//       "~": path.resolve(__dirname, "./"),
//     },
//   },
// });

/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "~": path.resolve(__dirname, "./"),
    },
  },
});
