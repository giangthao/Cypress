/// <reference types="Cypress" />
import 'cypress-iframe';
describe('My Second Example Test Case', function () {
  it('My Third Test Case', function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
   cy.frameLoaded('#courses-iframe')
   cy.iframe().find("a[href='#/mentorship']").eq(0).click()
  cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length',2)

  })
}
)