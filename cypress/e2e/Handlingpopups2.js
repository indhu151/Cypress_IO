describe("popups",()=>{
    it("alert popup",()=>{
        cy.visit("")
        cy.on('window:alert',(t)=>{
            expect(t).should('have.text','')

        
        })

       
    })
})