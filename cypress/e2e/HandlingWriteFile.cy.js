describe("write file",()=>{
    it("write",()=>{
        cy.writeFile('log1.txt',"cypress");

    })
    it("write json",()=>{
        cy.writeFile('log1.json','{"name":"json","age":35}')
    })
})