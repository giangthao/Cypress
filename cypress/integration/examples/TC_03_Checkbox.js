/// <reference types="Cypress" />
describe('My Second Example Test Case', function () {
    it('My Third Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        // Check the check box and assert checkbox is selected with value exactely
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        // Uncheck the check box and assert checkbox is not be checked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get("input[type='checkbox']").check(['option1', 'option2']).should('be.checked').and('have.value', 'option1', 'option2');



    })
}
)