/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
  it('My Third Test Case', function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').then(function(el){
      const url = el.prop('href')
      cy.log(url);
      cy.visit(url)
    })


  })
}
)