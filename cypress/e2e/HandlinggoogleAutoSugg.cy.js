describe("google",()=>{
    it("sugg",()=>{
        cy.visit("https://www.google.com/")
        cy.get('[name="q"]').type("java")
        cy.get('div#Alh6id>.erkvQe>.OBMEnb>ul>li>.eIPGRd>:nth-child(2)>.lnnVSe>.wM6W7d>span')
        .each(($ele,index,$list)=>{
            let text=$ele.text()
            cy.log(text)
        })
    })
})