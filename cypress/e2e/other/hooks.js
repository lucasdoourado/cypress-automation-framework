/// <reference types="cypress" />
describe('Hooks', () => {
	before(() => {
		cy.log("runs once before all tests in the block");
	});

	beforeEach(() => {
		cy.log("runs before each test in the block");
	});

	afterEach(() => {
		cy.log("runs after each test in the block");
	});

	after(() => {
		cy.log("runs once after all tests in the block");
	});

	it('example test 1', () => {
		cy.log('example test');
	});

	it('example test 2', () => {
		cy.log('example test');
	});
});