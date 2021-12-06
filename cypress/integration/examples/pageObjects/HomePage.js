class HomePage{
getNameTextbox(){
    return cy.get('input[name="name"]:nth-child(2)')
}
getAlertName(){
    return cy.get(':nth-child(1) > .alert')
}
getTwoWayDataName(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender(){
    return  cy.get('select')
}
getRadioButton(){
    return  cy.get('#inlineRadio3')
}
getShopPage(){
    return  cy.get(':nth-child(2) > .nav-link')
}

}
export default HomePage