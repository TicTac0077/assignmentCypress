const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Turn on the video recorder.
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // Implement Node event listeners here.
    },

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    // Reload the browser between tests to ensure isolation.
    trashAssetsBeforeRuns: true,
    // Each test starts with a clean state.
    numTestsKeptInMemory: 0,

    // Disable taking screenshots in case of an error.
    screenshotOnRunFailure: false,
  },
});
