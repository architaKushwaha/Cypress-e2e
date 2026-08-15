class HomePage{

    webLocators = {
        searchBox: '.form-control input-lg',
        clickSearch: 'btn btn-default btn-lg',
        Product: 'img[title="MacBook"]',
        addToCart: '.fa.fa-shopping-cart',
        sucessMessage: '.alert alert-success alert-dismissible',  
    }

    searchProduct(productName){
        cy.get(this.webLocators.searchBox).type(productName)
        cy.get(this.webLocators.clickSearch).click()
    }

    clickProduct(){
        cy.get(this.webLocators.Product).click()
    }

    addToCart(){
        cy.get(this.webLocators.addToCart).click()
    }
    verifySuccessMessage(){
        return cy.get(this.webLocators.sucessMessage)
    }

}
export default HomePage