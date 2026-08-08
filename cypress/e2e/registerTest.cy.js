import RegisterPage from '../pages/registerPage'
import registerTestData from '../fixtures/registerTestData.json'
const registerObj = new RegisterPage()
const registerData = registerTestData

describe('Register Test', ()=>{

    it('Register User', ()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastNAme(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectcheckbox()
        registerObj.clickContinueButton()

    })

})