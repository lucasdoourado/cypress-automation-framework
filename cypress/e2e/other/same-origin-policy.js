/// <reference types="cypress" />
describe('cypress web security', ()=>{
   it.skip('validate visiting two different domains', ()=>{
       //this will fail
       cy.visit("http://www.webdriveruniversity.com");
       cy.visit("https://www.google.com");
   });
   it('validate visiting two different domains via user actions', ()=>{
       cy.visit("http://www.webdriveruniversity.com");
       cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
   });
    it('origin command', ()=>{
        cy.origin("webdriveruniversity.com", ()=>{
            cy.visit('/');
        });
        cy.origin("automationteststore.com", ()=>{
            cy.visit('/');
        });
    });
});