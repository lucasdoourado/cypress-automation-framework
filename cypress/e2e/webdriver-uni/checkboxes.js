/// <reference types="Cypress" />
describe("verify checkboxes via webdriveruni", () => {
	it("check/uncheck and validate checkbox", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
		cy.get("input[type='checkbox']").check('option-1').should('be.checked');
		cy.get("input[type='checkbox']").uncheck('option-3').should('not.be.checked');
	});
	it("check multiple checkboxes", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
		cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked');
	});
});
