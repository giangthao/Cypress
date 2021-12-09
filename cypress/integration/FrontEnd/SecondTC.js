/// <reference types="Cypress" />


describe('My Second Example Test Case', function () {
    it('My Second Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.viewport(1366, 768);
        cy.get('.search-keyword').type('ca');
        cy.wait(1000);
        //find child chaining
        //Declare locator to other name. Then you can use again.
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        })
        //Assert if logo contain Green cart
        // cy.get('.brand').should('have.text','GREENKART')
        // cy.get('.brand').then(function (logoelement) {
        //     cy.log(logoelement.text());
        // })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoname){
            cy.log(logoname.text());
        });
       cy.get('.cart-icon >img').click();
       cy.contains('PROCEED TO CHECKOUT').click();
       cy.contains('Place Order').click();





    })
}
)