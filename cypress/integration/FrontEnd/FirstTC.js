/// <reference types="Cypress" />
describe('My First Example Test Case', function () {
    it('My First Test Case', function () {
        cy.visit("https://rahulshettyacademy.com");
        cy.viewport(1366, 768);
        cy.get('.search-keyword').type('ca');
        cy.wait(3000);
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        //find child chaining
        //Declare locator to other name. Then you can use again.
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log("The button clicked")
        });
        console.log('sf')
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
      
        
        const logo = cy.get('.brand');
        






    })
}
)
