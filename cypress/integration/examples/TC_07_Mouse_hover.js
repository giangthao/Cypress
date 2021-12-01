/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
  it('My Third Test Case', function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    //Control mouse hover

   // cy.get('div .mouse-hover-content').invoke('show')
   //If user don't want use invoke , then user use force:true to control popup
cy.contains('Top').click({force:true})
cy.url().should('include','https://www.rahulshettyacademy.com/AutomationPractice/#top')


  })
}
)