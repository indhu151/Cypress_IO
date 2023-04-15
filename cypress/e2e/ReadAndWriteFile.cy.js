describe("read and wrie",()=>{
    it.skip("read file",()=>{
        cy.writeFile("log.json",{name:"Ria",age:50})
    })
    it.skip("write text file",()=>{
        cy.writeFile("log.txt","Cypress is a automation tool")
    })
    it("read json file",()=>{
        cy.readFile("log.json").its("age").should('eq',50)
    })
    it.only("read text file",()=>{
        cy.readFile("log.txt").should('eq',"Cypress is a automation tool")
    })

})