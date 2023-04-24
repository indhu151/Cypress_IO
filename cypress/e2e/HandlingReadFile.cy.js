describe("read file",()=>{
    it("read text file",()=>{
        cy.readFile('log1.txt').should('eq','cypress')
    })
    it('read file from json',()=>{
        cy.readFile('log1.json').its("age").should('eq',35)
    })
})