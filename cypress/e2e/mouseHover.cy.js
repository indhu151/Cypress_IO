describe("mouse hover",()=>{
    it("check",()=>{
        cy.visit("https://www.amazon.in/")
        cy.get('#nav-link-accountList-nav-line-1"]').invoke('show')
        cy.get('#multiasins-img-link').click()
        cy.url().should('contain','amazonprime?ref=in-pr-tryprime-unrec-multi-benefit')

    })
})