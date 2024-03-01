
describe("Test suite - conjunto de pruebas", () =>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it("Validar Pag de inicio", () =>{
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom >h4').contains("Online Banking")
    })

    it("Prueba 2 E2E Transferencia de fondos", () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(1)
        cy.get('#tf_toAccountId').select(5)
        cy.get('#tf_amount').type(300)
        cy.get('#tf_description').type("Test de transferencia")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")
    })

    it("Prueba 3 E2E prueba pastel", ()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should('be.visible')
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should('not.be.visible')

    })

})