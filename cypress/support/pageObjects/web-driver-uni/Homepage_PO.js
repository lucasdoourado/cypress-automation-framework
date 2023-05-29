class Homepage_PO {
	visitHomePage() {
		cy.visit(Cypress.env('webdriveruni_homepage'));
	}
	
	clickOn_ContactUs_Button() {
		cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
	}
}

export default Homepage_PO;