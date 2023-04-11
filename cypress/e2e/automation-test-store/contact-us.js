/// <reference types="Cypress" />

describe("Test the contact us form in automation test store website", () => {
  it("positive test path", () => {
    cy.visit("https://automationteststore.com/");
    cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.xpath("//input[contains(@name, 'first')]").type("lucas");
    cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").type(
      "example@email.com"
    );
    cy.xpath("//textarea[contains(@name, 'enquiry')]").type(
      "do you provite discount on bulk orders?"
    );
    cy.contains("button", "Submit").click();
    cy.contains(
      "p",
      "Your enquiry has been successfully sent to the store owner!"
    ).should("be.visible");
  });
});
