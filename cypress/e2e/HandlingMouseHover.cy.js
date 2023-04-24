describe("mousehover",()=>{
    it("amazon",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.get('#nav-al-container').should('be.visible')
        cy.get('.nav-text').then((ele)=>{
            let text=ele.text()
            cy.log(text)
        })
    })
})