describe("auto suggesstion",()=>{
    it("auto",()=>{
    cy.visit("https://www.google.com/")
    cy.get('[name="q"]').type("cypress")
    .should('have.value','cypress')
    cy.get('div.wM6W7d>span').each(($ele,index,$list)=>{
        if($ele.text=="cypress testing")
        {
            cy.wrap($ele).click()
        }
    })
    cy.wait(5000)
    cy.title().should('contain','cypress testing - Google Search')
    })
})