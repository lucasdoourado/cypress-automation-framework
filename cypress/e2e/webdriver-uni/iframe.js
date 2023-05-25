/// <reference types="Cypress" />
describe("handling Iframes & modals", () => {
    it("handle webdriveruni iframe and modal", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true});
        cy.get('#frame').then(($iframe)=>{
            let body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        });
        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal');
        cy.get('@modal').should(($expectedText)=>{
           let text = $expectedText.text();
           expect(text).to.include('Welcome to webdriveracademy.com');
        });
        cy.get('@modal').contains('Close').click();
    });
});
