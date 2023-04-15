describe("Screenshot",()=>{
    it("capture fullpage screenshot",()=>{
    cy.visit("https://www.amazon.in/")
    cy.screenshot({capture:"fullPage"})
    })
    it.only("take screenshot of particular image",()=>{
        cy.visit("https://www.amazon.in/")
        cy.get('#nav-logo-sprites').screenshot()
    })
})