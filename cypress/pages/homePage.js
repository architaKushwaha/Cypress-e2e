class HomePage{

    webLocators = {
        searchBox: 'input.form-control.input-lg',
        clickSearch: 'button.btn.btn-default.btn-lg',
        Product: '.product-thumb',
        addToCart: 'button[onclick*="cart"]',
        sucessMessage: '.alert.alert-success.alert-dismissible',
    }

    searchProduct(productName){
        cy.get(this.webLocators.searchBox).type(productName)
        cy.get(this.webLocators.clickSearch).click()
    }

    clickProduct(){
        cy.contains(this.webLocators.Product, 'MacBook').should('be.visible').click()
    }

    addToCart(){
        cy.contains(this.webLocators.Product, 'MacBook')
            .find(this.webLocators.addToCart)
            .should('be.visible')
            .click()
    }
    verifySuccessMessage(){
        return cy.get(this.webLocators.sucessMessage)
    }

}
export default HomePage