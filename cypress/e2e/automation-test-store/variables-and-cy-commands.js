/// <reference types="cypress" />

describe("verifying variables, cypress commands and jquery commands", () => {
	it("navegating to specific product pages", () => {
		cy.visit('https://automationteststore.com/');
		//do not use this approach
		/*
		const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup');
		makeupLink.click();
		const skincareLink = cy.get("a[href*='product/category&path']").contains('Skincare');
		skincareLink.click();
		*/
		cy.get("a[href*='product/category&path']").contains('Makeup').click();
	});
	it("navegating to specific product pages", () => {
		cy.visit('https://automationteststore.com/');
		cy.get("a[href*='product/category&path']").contains('Makeup').click();
		cy.get("h1 .maintext").then(($headerText) => {
			const headerText = $headerText.text();
			cy.log(headerText);
			expect(headerText).is.eq('Makeup');
		});
	});
	it("validate properties of contact us page", () => {
		cy.visit('https://automationteststore.com/index.php?rt=content/contact');
		//uses cypress commands and chaining
		cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
		//JQuery approach
		cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
			const firstNameText = text.find('#field_11').text();
			expect(firstNameText).to.contain('First name');
			//Embedded commands (closure)
			cy.get('#field_11').then(fnText => {
				cy.log(fnText.text());
				cy.log(fnText);
			});
		});
	});
});