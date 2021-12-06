/// <reference types="Cypress" />
//import cypress from 'cypress';
import 'cypress-iframe';
import HomePage from '../examples/pageObjects/HomePage'
import ProductPage from './pageObjects/ProductPage';
describe('My Ten Test Case', function () {
    before(() => {
       cy.fixture('example').then(function(data){
               this.data=data
       })
      })
  it('My First Test Case', function () {
    
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    const homePage = new HomePage()
    const productPage = new ProductPage()
    homePage.getNameTextbox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataName().should('have.value',this.data.name)
    homePage.getNameTextbox().clear()
    homePage.getNameTextbox().type('T')
    homePage.getAlertName().contains('Name should be at least 2 characters')
    homePage.getNameTextbox().clear()
    homePage.getRadioButton().should('be.disabled')
     Cypress.config('defaultCommandTimeout',10000)
    homePage.getShopPage().click()
    this.data.productname.forEach(function(element) {
      console.log(element)
      cy.selectProduct(element)
    })
    productPage.getCheckOutButton().click()
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get(".suggestions > ul > li > a").click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    cy.get('div.alert').contains('Thank you! Your order will be delivered in next few weeks :-).')
 



  })
  
}
)