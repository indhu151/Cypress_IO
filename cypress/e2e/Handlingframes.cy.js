import 'cypress-iframe'
describe("frames",()=>{
    it("handle",()=>{
        cy.visit("https://demoqa.com/frames")
        cy.frameLoaded('#frame1')
        cy.iframe('#frame1')
        cy.get('#sampleHeading').should('have.text','This is a sample page')
    })
})