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
    
    cy.visit(Cypress.env('url'))
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
    var sum =0
    cy.get('tr td:nth-child(4) strong').each(($el, index, list)=>{
      const result = $el.text()
      var rel;
      rel = parseFloat(result.substring(3))
   
      sum = sum + rel
  
    })
    cy.get('h3 strong').then(function(element){
      var actual;
      actual = parseFloat(element.text().substring(3))
      expect(Number(sum)).to.equal(Number(actual))
    })
    cy.contains('Checkout').click()
    
    cy.get('#country').type('India')
    cy.get(".suggestions > ul > li > a").click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    cy.get('div.alert').contains('Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('div.alert').then(function(element)
    {
        const actual = element.text()
        expect(actual.includes('Success')).to.true
    }
    )



  })
  
}
)