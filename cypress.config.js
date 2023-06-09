const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'sa123c',
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber());
            // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        baseUrl: "https://webdriveruniversity.com/",
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        screenshotOnRunFailure: false,
        videoUploadOnPasses: false,
        trashAssetsBeforeRuns: true,
        video: false,
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
            configFile: 'reporter-config.json',
        },
        retries: {
            runMode: 1, openMode: 1
        },
        env: {
            webdriveruni_homepage: "https://webdriveruniversity.com/", first_name: "Giulia"
        }
    },
});
