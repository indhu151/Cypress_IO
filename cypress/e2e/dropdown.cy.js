describe("dropdown",()=>{
    it("check",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        cy.get('.custom-select').select('Denmark')
        cy.get('.custom-select').select('1').should('have.value','1')
        cy.get('.custom-select')
       .select(['Sweden','Potugal'])
        .invoke('val')
        .should('deep.equal',['8','5'])
       // cy.get('.custom-select').select('1').should('be.selected')
        //cy.get('.custom-select').select('[1,2]').should('have.value',['1','2'])
    })
})