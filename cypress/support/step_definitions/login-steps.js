import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
  stub = cy.stub();
});

Given('I access the WebDriverUniversity Login portal Page', () => {
  cy.visit('https://webdriveruniversity.com/Login-Portal/index.html');
});
When('I enter username {word}', (userName) => {
  cy.get('#text').type(userName);
});
And('I enter password {word}', (password) => {
  cy.get('#password').type(password);
});
And('I click the login button', () => {
  cy.get('#login-button').click();
  cy.on('window:alert', stub);
});
Then('I should be presented with the following message {word} {word}', (message, message2) => {
  const expectedMessage = message + " " + message2;
  expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
});
