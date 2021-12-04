/// <reference types="Cypress" />
import 'cypress-iframe';
describe('My Ten Test Case', function () {
    before(() => {
        // runs once before all tests in the block
      })
  it('My Third Test Case', function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').type('Thao')

  })
}
)