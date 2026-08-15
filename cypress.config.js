const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart",
    specPattern: ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.js'],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env: {
    LOGIN_PATH: '/index.php?route=account/login'
  }
});
