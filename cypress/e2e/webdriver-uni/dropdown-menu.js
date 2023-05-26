/// <reference types="Cypress" />
describe("interact with dropdown list via webdriveruni", () => {
    it("select specific values", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#'); // select via value
        cy.get('#dropdowm-menu-2').select('Maven').contains('Maven'); // select via text
        cy.get('#dropdowm-menu-3').select(3); // select via index
    });
    it("validate specific states", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.get('#fruit-selects').find('[value=\'orange\']').should('have.attr', 'disabled');
    });
});