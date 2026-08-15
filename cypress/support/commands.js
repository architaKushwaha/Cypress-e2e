Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('LOGIN_PATH'))
    cy.get('#input-email').clear().type(email)
    cy.get('#input-password').clear().type(password)
    cy.get('input.btn.btn-primary').click()
})