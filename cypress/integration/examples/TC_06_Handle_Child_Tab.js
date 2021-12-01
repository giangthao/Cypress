/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
  it('My Third Test Case', function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    //Control Child Tab
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    // Verify The Url correct
    cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index')
    cy.wait(10000)
    //back to origin url
    cy.go('back')
    //Code list all element then for all element
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const textVeg = $el.text();
      if (textVeg.includes('simple Python Language')) {
        //Code use next element sibling
        cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
          const priceExpect = price.text()
          expect(priceExpect).to.equal("25")
        })
      }
    })



  })
}
)