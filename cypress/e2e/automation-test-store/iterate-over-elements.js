/// <reference types="cypress" />

describe("iterate over elements", () => {
    it("log information of all hair care products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
    });
    it("add specific product to basket", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
    });
});