/// <reference types="Cypress" />
import 'cypress-iframe';
describe('My Ten Test Case', function () {
    before(() => {
       cy.fixture('example').then(function(data){
        this.data=data
       })
      })
  it('My First Test Case', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)
 

  })
  it('My Second Test Case', function () {
    cy.get('input[name="name"]:nth-child(2)').type('Thao 02')
  })
}
)