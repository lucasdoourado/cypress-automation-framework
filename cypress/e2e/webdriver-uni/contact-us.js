/// <reference types="Cypress" />
describe("Test Contact Us form via WebdriverUni", () => {
  it("positive test cenario", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com/");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    cy.get('[name="first_name"]').type("lucas");
    cy.get('[name="last_name"]').type("dourado");
    cy.get('[name="email"]').type("example@email.com");
    cy.get("textarea.feedback-input").type("how are you?");
    cy.get('[type="submit"]').click();
    cy.xpath(
      "//div[@id='contact_reply']/h1[.='Thank You for your Message!']"
    ).should("be.visible");
  });
  it("negative test cenario", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com/");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    cy.get('[name="first_name"]').type("lucas");
    cy.get('[name="last_name"]').type("dourado");
    cy.get("textarea.feedback-input").type("how are you?");
    cy.get('[type="submit"]').click();
    cy.get("body").should("contain.text", "Error");
  });
});
