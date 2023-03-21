describe("Radio button",()=>{
    it("check",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.url().should('include','.net/home/automation')

        //to check the visibility
        cy.get('#thursday').should('be.visible')
        //to select the checkbox
        cy.get('#thursday').check().should('be.checked')
        //to unselect
        cy.get('#thursday').uncheck().should('not.be.checked')
        //to select all checkboxes
        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        //to uncheck all
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
        //to select first checkbox
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')
        //to select last
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

       

       
    })
})