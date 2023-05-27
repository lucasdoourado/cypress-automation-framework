/// <reference types="Cypress" />
describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      globalThis.data = data;
    });
  });
  it("positive test cenario", () => {
    cy.visit("/");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.webdriveruni_ContactForm_Submission(
      Cypress.env('first_name'),
      data.last_name,
      data.email,
      'How can i learn Cypress?',
      'h1',
      'Thank You for your Message!'
    );
  });
  it("negative test cenario", () => {
    cy.visit("/");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.webdriveruni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      ' ',
      'How can i learn Cypress?',
      'body',
      'Error: Invalid email address'
    );
  });
});