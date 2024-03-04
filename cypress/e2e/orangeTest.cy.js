

describe("Orange test E2E", ()=>
{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('validate home page', ()=>{
        cy.get('.orangehrm-login-logo > img').should('be.visible')
    })

    it('validate txt', ()=>{
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
    })

    it('validate login', ()=>{
        cy.get('.oxd-button').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    })

    it('validate new user', ()=>{
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()

    })
})