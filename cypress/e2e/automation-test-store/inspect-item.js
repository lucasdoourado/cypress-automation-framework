/// <reference types="cypress" />
describe("inspect item in automation test store website", () => {
	it("happy path with item text", () => {
		cy.visit("https://automationteststore.com/");
		cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
	});
	it("happy path using index", () => {
		cy.visit("https://automationteststore.com/");
		cy.get(".fixed_wrapper").find(".prdocutname").eq(0);
	});
});
