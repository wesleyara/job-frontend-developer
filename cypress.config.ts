import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
});
