/// <reference types="Cypress" />
describe("validate WebdriverUni homepage links", () => {
	it("confirm links redirect to the correct pages", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.reload(true); // reload without using cache
		cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
		cy.url().should('include', 'contactus');
		cy.go('back');
		cy.contains('Contact Us').should('exist');
		cy.go("forward");
		cy.url().should('include', 'contactus');
	});
});
