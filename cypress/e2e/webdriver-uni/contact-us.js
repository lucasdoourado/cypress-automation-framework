import Homepage_PO from "../../support/pageObjects/web-driver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/web-driver-uni/Contact_Us_PO";
/// <reference types="Cypress" />
describe("Test Contact Us form via WebdriverUni", () => {
	const homepage_PO = new Homepage_PO();
	const contact_Us_PO = new Contact_Us_PO();
	before(function () {
		cy.fixture('example').then(function (data) {
			globalThis.data = data;
		});
	});
	beforeEach(function () {
		homepage_PO.visitHomePage();
		homepage_PO.clickOn_ContactUs_Button();
	});
	it("positive test cenario, via page object modelling", () => {
		contact_Us_PO.contactForm_Submission(
			Cypress.env('first_name'),
			data.last_name,
			data.email,
			'How can i learn Cypress?',
			'h1',
			'Thank You for your Message!'
		);
	});
	it("negative test cenario, via custom commands", () => {
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