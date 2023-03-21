describe("Radio button",()=>{
    it("check",()=>{
        cy.visit("http://omayo.blogspot.com/")
        cy.url().should('contain','blogspot.com')

        //to check the radio button
        cy.get('input[value="Bicycle"]').should('be.checked')
        //to be visible
        cy.get('input[value="Car"]').should('be.visible')
        //to select
        cy.get('input[value="Car"]').check().should('be.checked')
        //to unselect
        //cy.get('input[value="Car"]').uncheck().should('not.be.checked')
        

    })
})