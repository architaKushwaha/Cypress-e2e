import HomePage from '../pages/homePage'
const homePageObj = new HomePage()
import testData from '../fixtures/testData.json'

describe('add to cart', () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('should add a product to the cart', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.clickProduct()
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain.text', testData.message.successMessage)
    })

})