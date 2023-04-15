describe("navigation",()=>{
    it("commands",()=>{
        //to enter the the application
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')
        //cy.xpath()

        //to click on software
        cy.get('#narbar-menu>ul>:nth-child(5)>.nav-link').click()
        cy.title().should('contain','Software')
        
        //to move back
        cy.go('back')

        //to move forward
        cy.go('forward')
        cy.reload()
    })
})