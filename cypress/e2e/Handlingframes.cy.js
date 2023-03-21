import 'cypress-iframe'
describe("handling frames",()=>{
    it.skip("appraoch 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
    const frame=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        frame.clear().type("Welcome to cypress")
    })
    it("approach 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr')
        .clear().type("Cypress is a automation tool")        

    })
})