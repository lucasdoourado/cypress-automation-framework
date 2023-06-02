/// <reference types="cypress" />
describe("Test Datepicker via webdriveruni", () => {
	it("Select date from the datepicker", () => {
		cy.visit("http://www.webdriveruniversity.com");
		cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });
		cy.get('#datepicker').click();
		// let date = new Date();
		// date.setDate(date.getDate())
		// cy.log(date.getDate()) //get current day i.e. 22
		// let date2 = new Date();
		// date2.setDate(date.getDate() + 5)
		// cy.log(date2.getDate()) //get current day i.e. 22 + 5 = 27
		var date = new Date();
		date.setDate(date.getDate() + 400);
		var futureYear = date.getFullYear();
		var futureMonth = date.toLocaleString("en-us", { month: "long" });
		var futureDay = date.getDate();
		cy.log("Future year to select: " + futureYear);
		cy.log("Future month to select: " + futureMonth);
		cy.log("Future day to select: " + futureDay);

		function selectMonthAndYear() {
			cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
				if (!currentDate.text().includes(futureYear)) {
					cy.get('.next').first().click();
					selectMonthAndYear();
				}
			}).then(() => {
				cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
					if (!currentDate.text().includes(futureMonth)) {
						cy.get('.next').first().click();
						selectMonthAndYear();
					}
				})
			})
		}

		function selectFutureDay() {
			cy.get('[class="day"]').contains(futureDay).click();
		}

		selectMonthAndYear();
		selectFutureDay();
	});
})