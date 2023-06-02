/// <reference types="Cypress" />
describe("test mouse actions", () => {
	it("scroll element into view", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
	});
	it("drag and drop", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
		cy.get('#draggable').trigger('mousedown', { which: 1 });
		cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
		cy.get('#droppable').should('contain', 'Dropped!');
	});
	it("double click", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
		cy.get('#double-click').dblclick();
		cy.get('[class="div-double-click double"]').should('be.visible');
	});
	it("hold down click", () => {
		cy.visit("https://webdriveruniversity.com/");
		cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
		cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
			expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
		});
	});
});