describe("alert",()=>{
    it("accept",()=>{
        cy.visit("https://demoqa.com/alerts")
        cy.get('#alertButton').should('have.text','Click me').click()
        cy.on('window:alert',(t)=>{
            expect(t).contains('You clicked a button')
        })
    })
})