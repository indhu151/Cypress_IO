describe("amazon.in",()=>{
    it("handling cart",()=>{
        cy.visit("https://www.amazon.in/")
        cy.url().should('eq','https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('kurtis{enter}')
        cy.title().should('contain','Amazon.in : kurtis')
        cy.get('.a-link-normal[href*="B0BTBYN3Z6"]')
        .invoke('removeAttr','target')
        .first().click()
        cy.url().should('include','Generic-Emb-Geo-Kurti-Medium/dp/B0BTBYN3Z6')
         
    })
})