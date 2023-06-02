/// <reference types="Cypress" />
describe("verify radio buttons via webdriveruni", () => {
	it("check specific radio button", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
		cy.get('#radio-buttons').find("[type='radio']").as('radio-buttons');
		cy.get('@radio-buttons').first().check().should('be.checked');
		cy.get('@radio-buttons').eq(1).check().should('be.checked');
	});
	it("validate state of specific radio button", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
		cy.get("[value='lettuce']").should('not.be.checked');
		cy.get("[value='pumpkin']").should('be.checked');
		cy.get("[value='cabbage']").should('be.disabled');
	});
});