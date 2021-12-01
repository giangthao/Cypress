/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
    it('My Third Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('Option2').should('have.value', 'option2');
        //Dynamic DropDown
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='India'){
                console.log($el.text())
                //User wrap because click is deprecated
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        //Control hide or visible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
        cy.get('#displayed-text').should('be.visible')
        //Control Radio Button
        cy.get('[value="radio2"]').check().should('be.checked')
        //Control Alert
    })
}
)