/// <reference types="Cypress" />
describe("verify autocomplete dropdown list via webdriveruni", () => {
    it("select specific product via autocomplete list", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            let prod = $el.text();
            let productToSelect = 'Avacado';
            if (prod === productToSelect) {
                $el.trigger('click');
                cy.get('#submit-button').click();
                cy.url().should('contain', productToSelect);
            }
        });
    });
});