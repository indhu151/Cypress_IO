describe("amazon",()=>{
    it("checkbox",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('contain','Amazon.in')
        cy.get('#twotabsearchtextbox').type("kurtis").type('{enter}')
        cy.url().should('include','kurtis')
        cy.get('#p_89\/Vaamsi > .a-list-item > .a-link-normal > .a-checkbox').check()
        .should('be.checked')
    })
})