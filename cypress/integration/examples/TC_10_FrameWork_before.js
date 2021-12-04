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
    
    cy.get('input[name="name"]:nth-child(2)').clear()
    cy.get('input[name="name"]:nth-child(2)').type('T')
    cy.get('input[name="email"]').click()
    cy.get(':nth-child(1) > .alert').contains('Name should be at least 2 characters')
    cy.get('select').select(this.data.gender)
    cy.get('input[name="name"]:nth-child(2)').clear()
    console.log(this.data.name)
    const text = this.data.name
    console.log(text)

  })
  it('My Second Test Case', function () {
    cy.get('input[name="name"]:nth-child(2)').type('Thao 02')
    cy.get('.ng-untouched').should('have.value','Thao 02')
   
  })
}
)