/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
    it('My Third Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        //Control Alert
     cy.get('#alertbtn').click(); 
     cy.get('[value="Confirm"]').click()
     Cypress.on('window:alert', (str) => {
        // returning false here prevents Cypress from
        // failing the test
        expect(str).equal('Hello , share this practice page and share your knowledge');

      })
      Cypress.on('window:confirm', (str) => {
        // returning false here prevents Cypress from
        // failing the test
        expect(str).equal('Hello , Are you sure you want to confirm?');

      })
    })
}
)