class RegisterPage{

    webLocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname', 
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        privacyPolicy:  'input[type="checkbox"]',
        continueButton: '.btn.btn-primary',
    }  

    openURL(){
        cy.visit(Cypress.env('REGISTER_PATH'))
    }
    enterFirstName(firstName){
        cy.get(this.webLocators.firstName).type(firstName)
    }                  
    enterLastNAme(lastName){
        cy.get(this.webLocators.lastName).type(lastName)    
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(telephone){
        cy.get(this.webLocators.telephone).type(telephone)
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.confirmPassword).type(password)
    }
    selectcheckbox(){
        cy.get(this.webLocators.privacyPolicy).check()
    } 
    clickContinueButton(){
        cy.get(this.webLocators.continueButton).click()
    }
    

}   
export default RegisterPage