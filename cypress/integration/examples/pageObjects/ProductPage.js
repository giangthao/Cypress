class ProductPage{
getCheckOutButton(){
    return cy.get('a.nav-link.btn')
}
getListCategory(){
    return cy.get('a.list-group-item')
}
getCheckoutSuccess(){
    return cy.get('button.btn.btn-success')
}
}
export default ProductPage
