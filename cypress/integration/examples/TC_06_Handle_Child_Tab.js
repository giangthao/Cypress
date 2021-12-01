/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
    it('My Third Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        //Control Child Tab
        cy.get('#opentab').invoke('removeAttr','target').click()
     
    })
}
)