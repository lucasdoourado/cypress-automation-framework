/// <reference types="cypress" />
describe('JSON objects', () => {
    it('JSON objects examples', () => {
        const exampleObject = {"key1": "lucas", "key2": "giulia"};
        const exampleArrayOfValues = ["lucas", "giulia", "kiara"];
        const users = {
            "apto": 101,
            "habitants" : [
                {
                    "firstName": "lucas",
                    "lastName": "dourado"
                },
                {
                    "firstName": "giulia",
                    "lastName": "dourado"
                },
                {
                    "firstName": "kiara",
                    "lastName": "dourado"
                },
            ]
        }
        cy.log(exampleObject["key"]);
        cy.log(exampleObject.key2);
        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[2]);
        cy.log(users.apto);
        cy.log(users.habitants[0].firstName);
        cy.log(users.habitants[1].lastName);
    });
});