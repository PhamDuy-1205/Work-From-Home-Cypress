//*     ---- Import Start ---- 
import general_data from '../Variables/general_data'
//*     ---- Import End ---- 





//*     ---- Code Start ---- 

Cypress.Commands.add('login', (username, password) => {
    // cy.visit(general_data.url.main)
    cy.get(general_data.selector.username_input).type(username)
    cy.get(general_data.selector.password_input).type(password).type('{enter}')
    // cy.get(general_data.selector.btn_login).click()
})


Cypress.Commands.add('logout', () => {
    cy.get(general_data.selector.btn_logout).click()
})


Cypress.Commands.add('loginS', function(username, password) {
    cy.session("Login-session", function(){
        cy.visit(general_data.url.main)
        cy.get(general_data.selector.username_input).type(username)
        cy.get(general_data.selector.password_input).type(password).type('{enter}')
        cy.wait(3000)
    })
})









//*     ---- Code End ---- 