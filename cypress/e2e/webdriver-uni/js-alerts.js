/// <reference types="Cypress" />
describe("handle js alerts", () => {
	it("confirm js alert contains the correct text", () => {
		//cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
		cy.get('#button1').click();
		cy.on('window:alert', (str) => {
			expect(str).to.equal('I am an alert box!');
		});
	});
	it("confirm js alert click OK", () => {
		//cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
		cy.get('#button4').click();
		cy.on('window:confirm', (str) => {
			return true; //click OK
		});
		cy.get('#confirm-alert-text').should('contain', 'You pressed OK!');
	});
	it("confirm js alert click CANCEL", () => {
		//cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
		cy.get('#button4').click();
		cy.on('window:confirm', (str) => {
			return false; //click CANCEL
		});
		cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!');
	});
	it("confirm js alert with stub", () => {
		//cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
		let stub = cy.stub();
		cy.on('window:confirm', stub);
		cy.get('#button4').click().then(() => {
			expect(stub.getCall(0)).to.be.calledWith('Press a button!');
		}).then(() => {
			return true;
		}).then(() => {
			cy.get('#confirm-alert-text').should('contain', 'You pressed OK!');
		});
	});
});
